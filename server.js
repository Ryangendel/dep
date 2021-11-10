const { strictEqual } = require("assert")
const express = require("express")

const app = express()

const path = require("path")

const PORT = process.env.PORT || 3001

if (process.env.NODE_ENV === "production"){
    app.use(express.static("build"))
    app.get("*", (req,res)=>{
        req.sendFile(path.resolve(__dirname, "build","index.html"))
    })
}

app.get("/bulldog",(req, res)=>{
    res.send({hi:"FROM SERVER"})
})

app.listen(PORT,()=>{
    console.log("listening on port 3001")
})