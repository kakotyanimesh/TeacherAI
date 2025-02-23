import express from "express"

const app = express()

app.use(express.json())


app.get("/", (req, res ) => {
    res.json({
        msg : "asdasda"
    })
})


app.listen(4000, () => {
    console.log(`the app is running at http://localhost:4000`);
    
})