import {userModules} from "../models/userModel"
import { Request, Response } from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import "dotenv/config"

const {ACCESS_TOKEN_SECRET}: any= process.env

export const userControllers = {

    registerUsers: async (req: Request, res: Response) => {
        const { email, password } = req.body;
        const userInfo = { email, password };
    
        try {
            // Check if user exists
            const ifUserExist = await userModules.getUserByEmail(userInfo.email);
            if (ifUserExist) {
                res.status(409).json({ message: "User already exists" });
            } else {
                // Create new user
            const user = await userModules.createUser(userInfo);
            res.status(201).json({
                message: "User is registered successfully",
                user,
            });
            }
        } catch (error) {
            console.error("Error registering user: ", error);
            res.status(500).json({ message: "Internal server error" });
        }
    },

    loginUser: async (req: Request, res: Response) => {
        const { email, password } = req.body;

        try {
            const user = await userModules.getUserByEmail(email);
            if (!user) {
                res.status(404).json({ message: "user not found" });
            }

            const passwordMatch = await bcrypt.compare(password+ "", user.password);
            if (!passwordMatch) {
                res.status(401).json({ message: "auth failed" });
            }

            // Generate token
            const accessToken = jwt.sign(
                { userid: user.id, email: user.email },
                ACCESS_TOKEN_SECRET,
                { expiresIn: "60s" }
            );

            res.cookie("accessToken", accessToken, {
                httpOnly: true,
                maxAge: 60 * 1000,
            });

            res.status(200).json({
                message: "Login success",
                user: { userid: user.id, email: user.email },
                accessToken: accessToken,
            });

        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "internal server error" });
        }
    },
    
    getUsers: async (req: Request,res: Response) => { 
        try {
            const users = await userModules.getUsers()
            res.status(200).json({
                message: "users are fetched successfully",
                users
            })
        } catch (error) {
            console.log(error)
        }
    }
}

