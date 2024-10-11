import jwt from "jsonwebtoken";
import {Request, Response, NextFunction} from "express"
import "dotenv/config"

const {ACCESS_TOKEN_SECRET}: any = process.env

export const verifyAccessToken = (req: Request ,res: Response ,next: NextFunction): void => {
    const token = req.cookies["accessToken"] || req.headers["x-access-token"]
    console.log("i am middle ware, here is your cookies=>  ", req.cookies)
    console.log("i am middle ware, here is your header=>  ", req.headers)
    if(!token){
        res.status(401).json({message: "unauthorized"})
    }else{
        jwt.verify(token, ACCESS_TOKEN_SECRET, (err: any, decoded: any)=>{
            if(err){
                res.status(403).json({message: "Forbidden", error: err.message}) 
            }
            const {userid, email} = decoded
            console.log(userid, email)
    
            // validation 
    
            // req.userinfo = {
            //      userid,
            //      email
            // }
            req.body.userid =  userid
            req.body.email = email
            next()
        })
    }
    
}