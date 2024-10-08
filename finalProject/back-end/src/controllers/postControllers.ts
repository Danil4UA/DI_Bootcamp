import { postModels } from "../models/postModel";
import { Request, Response } from "express"


export const postControllers = {

    createPost: async (req: Request, res: Response) => {
        const { content, userid } = req.body;

        if (!content || content.length === 0) {
            res.status(400).json({ message: "Content is required" });
        }   

        try {
            const post = await postModels.createPost({ content, userid });
            res.status(200).json({
                message: "Post is created successfully",
                post,
            });
        } catch (error) {
            console.error("Error creating post: ", error);
            res.status(500).json({ message: "Internal server error" });
        }
    },
    getAllPosts: async (req: Request, res: Response) => {
        try {
            const posts = await postModels.getAllPosts()
            res.status(200).json({
                message: "Posts are fetched successfully",
                posts
            })
        } catch (error) {
            console.error("Error fetching posts: ", error);
            res.status(500).json({ message: "Internal server error" });
        }
    },
    getPostById: async (req: Request, res: Response) => {
        try {
            const {id} = req.params
            const post = await postModels.getPostById(id)
            if (post.length === 0) {
                res.status(404).json({ message: "Post not found" });
            }else{
                res.status(200).json({
                    message: "Post fetched success",
                    post
                })
            }

        } catch (error) {
            console.error("Error fetching post: ", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }
}   