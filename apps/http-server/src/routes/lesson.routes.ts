import { Router } from "express";
import { authMiddleware } from "../middleware/auth";
import { createPlans } from "../controller/lesson.controller";

const lessonRoutes : Router = Router()

lessonRoutes.post("/createPlan", authMiddleware, createPlans)


export default lessonRoutes