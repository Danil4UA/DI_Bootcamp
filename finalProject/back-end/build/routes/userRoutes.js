"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userControllers_1 = require("../controllers/userControllers");
const verifyToken_1 = require("../middlewares/verifyToken");
const router = express_1.default.Router();
router.post("/register", userControllers_1.userControllers.registerUsers);
router.post("/login", userControllers_1.userControllers.loginUser);
router.get("/all", verifyToken_1.verifyAccessToken, userControllers_1.userControllers.getUsers);
exports.default = router;
