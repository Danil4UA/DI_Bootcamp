"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postModels = void 0;
const db_1 = require("../config/db");
const openai_1 = __importDefault(require("openai"));
exports.postModels = {
    createPost: (postInfo) => __awaiter(void 0, void 0, void 0, function* () {
        function convertPostToSentence(content) {
            const emojiText = content.emojis ? "with emojis" : "without emojis";
            const parts = [
                `Create a ${content.size} post for "${content.request}"`,
                `in ${content.language} language`,
                `in a ${content.style} style`,
                `targeting ${content.audience}`,
                emojiText
            ];
            return parts.join(', ') + '.';
        }
        const createContent = convertPostToSentence(postInfo.content);
        const trx = yield db_1.db.transaction();
        try {
            if (!createContent)
                throw Error;
            const client = new openai_1.default({
                apiKey: process.env.OPENAI_API_KEY
            });
            const params = {
                // check how you ar e saving messages 
                messages: [{ role: 'user', content: createContent }],
                model: 'gpt-3.5-turbo',
            };
            const response = yield client.chat.completions.create(params);
            const gptResponseText = response.choices[0].message.content;
            const [post] = yield trx('posts').insert({
                content: gptResponseText,
                created_at: new Date(),
                user_id: postInfo.userid
            }).returning('*');
            yield trx.commit();
            return post;
        }
        catch (error) {
            yield trx.rollback();
            console.log(error);
            throw error;
        }
    }),
    getAllPosts: () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            return yield (0, db_1.db)("posts")
                .select("id", "user_id", "content", "status");
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }),
    getPostById: (id) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const post = yield (0, db_1.db)("posts")
                .select("id", "user_id", "content", "status")
                .where({ "id": id })
                .first();
            if (!post) {
                throw new Error("Post not found.");
            }
            return post;
        }
        catch (error) {
            console.error(error);
            throw new Error("Error fetching post.");
        }
    }),
    deletePostById: (id) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const deletedRows = yield (0, db_1.db)("posts")
                .delete()
                .where({ "id": id });
            return deletedRows;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }),
    editPostById: (id, content) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const updatedRows = yield (0, db_1.db)("posts")
                .update({ content })
                .where({ id });
            if (updatedRows === 0) {
                throw new Error("Post not found or not updated.");
            }
            return updatedRows;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    })
};