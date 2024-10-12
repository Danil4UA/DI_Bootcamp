"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAccessToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const { ACCESS_TOKEN_SECRET } = process.env;
const verifyAccessToken = (req, res, next) => {
    const token = req.cookies["accessToken"] || req.headers["x-access-token"];
    if (!token) {
        res.status(401).json({ message: "unauthorized" });
    }
    else {
        jsonwebtoken_1.default.verify(token, ACCESS_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                res.status(403).json({ message: "Forbidden", error: err.message });
            }
            const { userid, email } = decoded;
            // validation 
            // req.userinfo = {
            //      userid,
            //      email
            // }
            req.body.userid = userid;
            req.body.email = email;
            next();
        });
    }
};
exports.verifyAccessToken = verifyAccessToken;
