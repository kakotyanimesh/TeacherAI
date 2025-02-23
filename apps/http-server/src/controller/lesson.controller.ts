import { lessonPlanSchema } from "@repo/common/types";
import { Request, Response } from "express";

export const  createPlans = async (req : Request, res : Response) => {
    const parsedObject = lessonPlanSchema.safeParse(req.body)

    if(!parsedObject.success){
        res.status(403).json({
            msg : `zod error : ${JSON.stringify(parsedObject.error.errors)}`
        })
        return
    }

    const { subject, topic, grade, duration } = parsedObject.data

    try {
        
    } catch (error) {
        
    }
}