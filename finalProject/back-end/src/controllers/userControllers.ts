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

    // put any response because return doesnt work withou it.
    // ask ziv why

    loginUser: async (req: Request, res: any) => {
        const { email, password } = req.body;
    
        try {
            const user = await userModules.getUserByEmail(email);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            const passwordMatch = await bcrypt.compare(password + "", user.password);
            if (!passwordMatch) {
                return res.status(401).json({ message: "Auth failed" });
            }

            const accessToken = jwt.sign(
                { userid: user.id, email: user.email },
                ACCESS_TOKEN_SECRET,
                { expiresIn: "1h" }
            );
    
            res.cookie("accessToken", accessToken, {
                httpOnly: true,
                maxAge: 60 * 60 * 1000,
            });

            return res.status(200).json({
                message: "Login success",
                user: { userid: user.id, email: user.email },
                accessToken: accessToken,
            });
    
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Internal server error" });
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
    },

    verifyAuth: (req: any, res: Response) => {

        // req any type because i didn't add useid to the interface 
        // res any type because without it i cannot use return . it throws an error

        if (!req.body.userid || !req.body.email) {
            res.status(400).json({ message: "Invalid data" });
        }else{
            const accessToken = jwt.sign(

                { userid: req.body.userid, email: req.body.email },
                ACCESS_TOKEN_SECRET,
                { expiresIn: "1h" }
            );
        
            res.cookie("accessToken", accessToken, {
                httpOnly: true,
                maxAge: 60 * 60 * 1000
            });
            
            res.json({
                message: "Auth success",
                user: { userid: req.userid, email: req.email },
                accessToken
            });
        }
    },
    logoutUser: (req: Request, res: Response) => {
        res.clearCookie("accessToken", {
            httpOnly: true,
            secure: true,  // Make sure you set secure flag in production
            sameSite: "strict" // To avoid CSRF attacks
        });
        res.status(200).json({message: "Logout successful"});
    }
}

