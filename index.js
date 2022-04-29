import mongoose from "mongoose"
import express from 'express'
import router from "./src/api/index.js"
const app = express()

app.use(express.json())
app.use('/api',router)


app.listen(3001,function( ){
    console.log("up and running on port 3001")
})