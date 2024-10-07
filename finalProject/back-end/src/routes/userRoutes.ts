import express, {Response, Request} from "express"
import { userControllers } from "../controllers/userControllers"

const router = express.Router()

router.post("/register", userControllers.registerUsers)
router.post("/login", userControllers.loginUser)
router.get("/all", userControllers.getUsers)


export default router