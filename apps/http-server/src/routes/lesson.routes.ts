import { Router } from "express";
import { authMiddleware } from "../middleware/auth";
import { createPlans, getLessonPlanData } from "../controller/lesson.controller";

const lessonRoutes : Router = Router()

lessonRoutes.post("/createPlan", authMiddleware, createPlans)
lessonRoutes.get("/getData/:lessonPlanId", authMiddleware, getLessonPlanData)


export default lessonRoutes