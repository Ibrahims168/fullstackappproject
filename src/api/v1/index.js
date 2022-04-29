import express from 'express'
import greetRouter from './greet/greet.api.js'
import userRouter from './user/user.api.js'

const v1Router = express.Router()

v1Router.use('/greet' , greetRouter)
v1Router.use('/user' , userRouter)

export default v1Router