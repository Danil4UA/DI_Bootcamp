"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const verifyToken_1 = require("../middlewares/verifyToken");
const postControllers_1 = require("../controllers/postControllers");
const router = express_1.default.Router();
// router.get("/all", verifyAccessToken, postControllers.getAllPosts)
router.get("/all", verifyToken_1.verifyAccessToken, postControllers_1.postControllers.getAllPostsByUserId);
router.get("/:id", verifyToken_1.verifyAccessToken, postControllers_1.postControllers.getPostById);
router.post("/create", verifyToken_1.verifyAccessToken, postControllers_1.postControllers.createPost);
router.put("/edit/:id", verifyToken_1.verifyAccessToken, postControllers_1.postControllers.editPostById);
router.delete("/:id", verifyToken_1.verifyAccessToken, postControllers_1.postControllers.deletePostById);
exports.default = router;
