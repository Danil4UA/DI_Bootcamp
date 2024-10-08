import express from "express"
import { verifyAccessToken } from "../middlewares/verifyToken"
import {postControllers} from "../controllers/postControllers"

const router = express.Router()

router.post("/create", verifyAccessToken,postControllers.createPost)

export default router