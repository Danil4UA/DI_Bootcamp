import express from "express"
import { userControllers } from "../controllers/userControllers"

const router = express.Router()

router.post("/register", userControllers.registerUsers)
router.get("/all", userControllers.getUsers)


export default router