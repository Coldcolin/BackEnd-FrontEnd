const express = require("express")
const cors = require("cors")
const jwt = require("jsonwebtoken")
const app = express()

app.use(cors())
app.use(express.json())

const users = [
    { id: "1", name: "Peter", email: "peter@gmail.com", isAdmin: true},
    { id: "2", name: "Colin", email: "colin@gmail.com", isAdmin: true},
    { id: "3", name: "Osas", email: "osas@gmail.com", isAdmin: true},
]

app.get("/", (req, res) =>{
    const getData = users.find((el) => {
        return el;
    })
    res.json(users)
})

app.post("/", (req, res) => {
    const {name, id, email, isAdmin} = req.body;

    const findUser = users.find((el) => el.name === name && el.email === email);

    if (findUser) {
        const token = jwt.sign(
            { 
                id: findUser.id,
                isAdmin: findUser.isAdmin,
                name: findUser.name,
                email: findUser.email,
            },
            "This is your secret key",
            { expiresIn: 60 * 60 }
        )
        res.status(201).json({
            message: "Welcome Back",
            data: {
                name: findUser.name,
                isAdmin: findUser.isAdmin,
                token,
            }
        })
    } else {
        res.status(400).json({ message: "user not found"})
    }
})

app.listen(4400, ()=>{
    console.log("server is now running")
})