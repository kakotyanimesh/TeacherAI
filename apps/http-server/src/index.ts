import express from "express"
import cors from "cors"
import userRoutes from "./routes/user.routes"
import cookieParser from "cookie-parser"
import lessonRoutes from "./routes/lesson.routes"

require("dotenv").config({path : "../../.env"})

const app = express()

app.use(cors({
    origin : "http://localhost:3000",
    methods : ["GET","HEAD","PUT","PATCH","POST","DELETE"],
    credentials : true
}))

app.use(express.json())
app.use(cookieParser())


app.use("/api/v1/user", userRoutes)
app.use("/api/v1/lesson", lessonRoutes)


app.listen(4000, () => {
    console.log(`the app is running at http://localhost:4000`);
    
})