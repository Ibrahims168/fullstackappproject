import express from 'express'

const userRouter = express.Router()

userRouter.get("/", function (req,res){
    res.send("Hello")
})

userRouter.post("/", function (req,res){
   const {body , headers} = req

console.log(headers.name + "says" + body.msg);
res.send('thanks for your msg')
})

export default userRouter