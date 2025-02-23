import express from "express"
import userRoutes from "./routes/user.routes"
import cookieParser from "cookie-parser"

require("dotenv").config({path : "../../.env"})

const app = express()


app.use(express.json())
app.use(cookieParser())


app.use("/api/v1/user", userRoutes)


app.listen(4000, () => {
    console.log(`the app is running at http://localhost:4000`);
    
})