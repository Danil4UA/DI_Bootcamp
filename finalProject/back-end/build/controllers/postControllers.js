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
exports.postControllers = void 0;
const postModel_1 = require("../models/postModel");
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
    getAllPosts: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const posts = yield postModel_1.postModels.getAllPosts();
            res.status(200).json({
                message: "Posts are fetched successfully",
                posts
            });
        }
        catch (error) {
            console.error("Error fetching posts: ", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }),
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
