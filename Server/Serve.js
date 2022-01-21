const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
// const jwt = require("jsonwebtoken")
const router = require("./MVC/router")
const app = express()
const port = 2233

app.use(cors())
app.use(express.json())

const url = "mongodb://localhost/jwtDatabase"

mongoose.connect(url).then(() =>{
    console.log("Database is now connected...!")
})


app.use("/", router);
app.listen(port, () =>{
    console.log(`Server now running on Port: ${port}`)
})