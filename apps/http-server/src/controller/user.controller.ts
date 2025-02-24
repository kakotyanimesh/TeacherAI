import { Request, Response } from "express";
import { signinSchema, signupSchema } from "@repo/common/types";
import {prisma} from "@repo/db";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const signup = async (req : Request, res : Response) => {
    const parsedObject = signupSchema.safeParse(req.body)

    if(!parsedObject.success){
        res.status(403).json({
            msg : `zod error : ${JSON.stringify(parsedObject.error.errors)}`
        })
        return
    }

    const { email, password, schoolName, username } = parsedObject.data

    try {
        const hasedPassword = await bcrypt.hash(password, 10)
        const user = await prisma.user.create({
            data : {
                email,
                password : hasedPassword,
                username,
                schoolName
            },
            select : {
                id : true
            }
        })

        res.status(200).json({
            msg : "user created successfully",
            username,
            id : user.id
        })

    } catch (error) {
        if(error instanceof Error && (error as any).code === "P2002"){
            res.status(403).json({
                msg : "user already exists with the email" + JSON.stringify(error)
            })
            return
        }

        res.status(500).json({
            msg : `something went wrong error : ${JSON.stringify(error)}`
        })
    }

}


export const signin = async (req : Request, res : Response) => {
    const parsedObject = signinSchema.safeParse(req.body)

    if(!parsedObject.success){
        res.status(403).json({
            msg : `zod error : ${JSON.stringify(parsedObject.error.errors)}`
        })
        return
    }


    const { email, password } = parsedObject.data

    try {
        const user = await prisma.user.findUnique({
            where : {
                email : email
            }
        })

        if(!user){
            res.status(403).json({
                msg : `user doesnot exits with that email kindly check it `
            })
            return
        }

        const comparePassword = await bcrypt.compare(password, user.password)

        if(!comparePassword){
            res.status(403).json({
                msg : "password doesnot matched bro"
            })
            return
        }

        

        const accessToken = jwt.sign({userId : user.email}, process.env.Access_Token_Secret as string, {expiresIn : "2d"})
        const refreshToken = jwt.sign({userId : user.email}, process.env.Refresh_Token_Secret as string, {expiresIn : "7d"})


        const options = {
            httpOnly : true,
            secure : true
        }

        res.status(201)
        .cookie("access_Token", accessToken, options)
        .cookie("refresh_Token", refreshToken, options)
        .json({
            msg : "user logged In successfully",
            username : user.username
        })
    } catch (error) {
        res.status(500).json({
            msg : `something went wrong while signin ${error} `
        })
    }
}

export const getPlans = async (req : Request, res : Response) => {
    const userId = req.userId

    if(!userId){
        res.status(403).json({
            msg : "no userid provided !!"
        })
        return
    }

    try {
        const plans = await prisma.lessonPlan.findMany({
            where : {
                userEmail : userId
            }
        })

        res.status(201).json({
            plans : plans,
            msg : "user plans are here "
        })
    } catch (error) {
        res.status(500).json({
            msg : `something went wrong while getting plans`
        })
    }
}
