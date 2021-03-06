const express = require("express")
const userModel = require("./model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const router = express.Router()

router.get("/", async (req, res) => {
    try{
        const getUsers = await userModel.find()
        res.status(200).json({message: "Successfully found", data: getUsers})
    }catch(error){
        res.status(400).json(error.message)
    }
})

router.post("/register", async (req, res) =>{
    try{
        const { email, password } = req.body

        const hidePassword = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, hidePassword)
        const createNewUser = await userModel.create({
            email,
            password: hashPassword
        })
        res.status(200).json({message: "User Created", data: createNewUser})
    }catch (error){
        res.status(400).json(error.message)
    }
})

router.post("/signin", async (req, res) =>{
    try{
        const {email, password} = req.body
        const findUser = await userModel.findOne({email})

        if(findUser){
            const myPassword = await bcrypt.compare(password, findUser.password)

            if(myPassword){
                const token = jwt.sign({id: findUser._id}, "This is my SECRET", {expiresIn: "1d"})

                res.status(200).json({message: "Welcome back User", data: {email: findUser.email, password: findUser.password}, token})
            }else{
                res.status(400).json({message: "Password incorrect"})
            }
        }else{
            res.status(400).json({message: "user does not exist"})
        }
        
    } catch (error){
        res.status(400).json(error.message)

    }
})

module.exports = router