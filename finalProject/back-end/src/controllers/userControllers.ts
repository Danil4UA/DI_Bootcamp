import {userModules} from "../models/userModel"
import { Request, Response } from "express"



export const userControllers = {
    registerUsers: async (req: Request, res: Response) => {
        const {email, password} = req.body
        const userInfo = {email, password}
        try {
            const user = await userModules.createUser(userInfo)
            res.status(200).json({
                message: "user is registered successfully",
                user
            })
        } catch (error) {
            console.log(error)
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

