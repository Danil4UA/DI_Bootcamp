import { postModels } from "../models/postModel";
import { Request, Response } from "express"
import { upload } from '../middlewares/uploadMiddleware'
import { db } from "../config/db";

export const postControllers = {

    createPost: async (req: Request, res: Response) => {
        const { content, userid } = req.body;
        console.log(content, userid)
        // need to add this to the type 

        // const {userid} = req.userinfo

        if (!content || content.length === 0) {
            res.status(400).json({ message: "Content is required" });
        }   

        try {
            const post = await postModels.createPost({ content, userid });
            console.log("Post is created successfully")
            res.status(200).json({
                message: "Post is created successfully",
                post,
            });
        } catch (error) {
            console.error("Error creating post: ", error);
            res.status(500).json({ message: "Internal server error" });
        }
    },
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
    },

    getAllPostsByUserId: async (req: Request, res: Response) => {
        try {
            const { userid } = req.body; 
            console.log("User ID:", userid);
    
            const posts = await postModels.getAllPostsByUserID(userid);
    
            if (posts.length === 0) {
                res.status(404).json({ message: "Posts are not found" });
            } else {
                res.status(200).json({
                    message: "Posts fetched successfully",
                    posts
                });
            }
    
        } catch (error) {
            console.error("Error fetching posts: ", error);
            res.status(500).json({ message: "Internal server error" });
        }
    },

    deletePostById: async (req: Request, res: Response) => {
        try {
            const {id} = req.params
            const deletedPost = await postModels.deletePostById(id)
        if (deletedPost === 0) {
            res.status(400).json({ message: "Post not found" })
        }
        res.status(200).json({ message: "Post deleted successfully" }) 
        } catch (error) {
            console.error("Error deleting post: ", error);
            res.status(500).json({ message: "Internal server error" });
        }
    },

    editPostById: async (req: Request, res: Response) => {
        try {
            const {id} = req.params
            const {content} = req.body
            
            const updatedRows = await postModels.editPostById(id, content)
            const updatedPost = await postModels.getPostById(id)
            if(!updatedRows){
                res.status(400).json({ message: "Post update faild" })
            }else{
                res.status(200).json({ 
                    message: "Post updated successfully",
                    updatedPost
                }) 
            }
        } catch (error) {
            console.error("Error updating post: ", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }
}   

export const updatePost = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { content } = req.body;
    const file = req.file;

    try {
        // Сохраняем информацию о файле и посте в базу данных
        const updatedPost = await db('posts').where({ id }).update({
            content: content,
            file_url: file ? `/uploads/${file.filename}` : null  
        });

        res.json({ message: 'Post updated', post: updatedPost });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error updating post');
    }
};