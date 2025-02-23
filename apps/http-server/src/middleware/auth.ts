import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken"

export const authMiddleware = async (req : Request, res : Response, next : NextFunction) => {
    const access_Token = req.cookies.access_Token

    if(!access_Token){
        res.status(403).json({
            msg : "no fucking access_token "
        })
        return
    }

    try {
        const decoded = await jwt.verify(access_Token, process.env.Access_Token_Secret as string) as JwtPayload
        
        req.userId = decoded.userId 
        next()
    } catch (error) {
        res.status(403).json({
            msg : `something went wrong while verifying tokens bro ${JSON.stringify(error)}`
        })
    }
}