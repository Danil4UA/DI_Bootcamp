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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePost = exports.postControllers = void 0;
const postModel_1 = require("../models/postModel");
const db_1 = require("../config/db");
exports.postControllers = {
    createPost: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { content, userid } = req.body;
        console.log(content, userid);
        // need to add this to the type 
        // const {userid} = req.userinfo
        if (!content || content.length === 0) {
            res.status(400).json({ message: "Content is required" });
        }
        try {
            const post = yield postModel_1.postModels.createPost({ content, userid });
            console.log("Post is created successfully");
            res.status(200).json({
                message: "Post is created successfully",
                post,
            });
        }
        catch (error) {
            console.error("Error creating post: ", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }),
    // getAllPosts: async (req: Request, res: Response) => {
    //     try {
    //         const posts = await postModels.getAllPosts()
    //         res.status(200).json({
    //             message: "Posts are fetched successfully",
    //             posts
    //         })
    //     } catch (error) {
    //         console.error("Error fetching posts: ", error);
    //         res.status(500).json({ message: "Internal server error" });
    //     }
    // },
    getPostById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const post = yield postModel_1.postModels.getPostById(id);
            if (post.length === 0) {
                res.status(404).json({ message: "Post not found" });
            }
            else {
                res.status(200).json({
                    message: "Post fetched success",
                    post
                });
            }
        }
        catch (error) {
            console.error("Error fetching post: ", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }),
    getAllPostsByUserId: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { userid } = req.body;
            console.log("User ID:", userid);
            const posts = yield postModel_1.postModels.getAllPostsByUserID(userid);
            if (posts.length === 0) {
                res.status(404).json({ message: "Posts are not found" });
            }
            else {
                res.status(200).json({
                    message: "Posts fetched successfully",
                    posts
                });
            }
        }
        catch (error) {
            console.error("Error fetching posts: ", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }),
    deletePostById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const deletedPost = yield postModel_1.postModels.deletePostById(id);
            if (deletedPost === 0) {
                res.status(400).json({ message: "Post not found" });
            }
            res.status(200).json({ message: "Post deleted successfully" });
        }
        catch (error) {
            console.error("Error deleting post: ", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }),
    editPostById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const { content } = req.body;
            const updatedRows = yield postModel_1.postModels.editPostById(id, content);
            const updatedPost = yield postModel_1.postModels.getPostById(id);
            if (!updatedRows) {
                res.status(400).json({ message: "Post update faild" });
            }
            else {
                res.status(200).json({
                    message: "Post updated successfully",
                    updatedPost
                });
            }
        }
        catch (error) {
            console.error("Error updating post: ", error);
            res.status(500).json({ message: "Internal server error" });
        }
    })
};
const updatePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { content } = req.body;
    const file = req.file;
    try {
        // Сохраняем информацию о файле и посте в базу данных
        const updatedPost = yield (0, db_1.db)('posts').where({ id }).update({
            content: content,
            file_url: file ? `/uploads/${file.filename}` : null
        });
        res.json({ message: 'Post updated', post: updatedPost });
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Error updating post');
    }
});
exports.updatePost = updatePost;
