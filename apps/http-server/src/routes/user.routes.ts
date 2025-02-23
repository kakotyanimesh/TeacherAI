import { Router } from "express";
import { getPlans, signin, signup } from "../controller/user.controller";
import { authMiddleware } from "../middleware/auth";

const userRoutes : Router = Router()


userRoutes.post("/signin", signin)
userRoutes.post("/signup", signup)
userRoutes.get("/plans", authMiddleware, getPlans)

export default userRoutes