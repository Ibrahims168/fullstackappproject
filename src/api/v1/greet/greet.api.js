import express from 'express'

const greetRouter = express.Router()

greetRouter.get("/", function (req,res){
    res.send("Hello")
})

greetRouter.post("/", function (req,res){
   const {body , headers} = req

console.log(headers.name + "says" + body.msg);
res.send('thanks for your msg')
})

export default greetRouter