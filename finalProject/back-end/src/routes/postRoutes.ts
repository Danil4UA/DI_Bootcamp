import express from "express"
import { verifyAccessToken } from "../middlewares/verifyToken"
import {postControllers} from "../controllers/postControllers"
import { updatePost } from '../controllers/postControllers';
import { upload } from '../middlewares/uploadMiddleware'; 

const router = express.Router()

// router.get("/all", verifyAccessToken, postControllers.getAllPosts)

router.get("/all", verifyAccessToken, postControllers.getAllPostsByUserId)

router.get("/:id", verifyAccessToken, postControllers.getPostById)




router.put('/edit/:id', upload.single('file'), updatePost)

router.post("/create", verifyAccessToken, postControllers.createPost)
router.put("/edit/:id", verifyAccessToken, postControllers.editPostById )
router.delete("/:id", verifyAccessToken, postControllers.deletePostById )

export default router