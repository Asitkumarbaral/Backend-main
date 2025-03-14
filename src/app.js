import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"


const app=express()
app.use(cors({
    origin:process.env.CORS_ORIGIN, 
    credentials:true

}))
//configuration
app.use(express.json({limit:"16kb"}))//data in the from
app.use(express.urlencoded({extended:true,limit:"16kb"}))//data from url
app.use(express.static("public"))//public is the folder name
app.use(cookieParser())
export {app}