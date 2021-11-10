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

app.use("/bulldog",(req, res)=>{
    res.send({hi:"FROM SERVER"})
})

app.listen(PORT,()=>{
    console.log("listening on port 3001")
})

// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const path = require('path')
// const app = express();


// app.use(bodyParser.json());
// app.use(cors());

// // API
// // const users = require('/api/users');
// app.use('/api/users', users);

// app.use(express.static(path.join(__dirname, '../build')))
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../build'))
// })
// -----
// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//     console.log(`Server started on port ${port}`);
// });