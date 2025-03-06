//require('dotenv').config({path:'./env'})
import  dotenv  from "dotenv";

import dbConnect from "./db/index.js";
//it ensure all the enviromental variable are asseseble using procese.env
dotenv.config({
    path:'./env'
})
//if it is return promse then handle with .then
dbConnect()
.then(()=>{
    app.listen(process.env.PORT ||8000,()=>{
        console.log(`Server is running as the port${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("Mongo db connection fail......",error);
    
})






















/*import express from "express"
const app=express()
(async()=>{
   try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${Db_name}`)
    app.on("error",(error)=>{
        console.error("Error",error)
        throw error
    })
    app.listen(process.env.PORT,()=>{
        console.log(`App is listening on the port ${process.env.PORT}`)
    })
   } catch (error) {
     console.error("ERROR",error)
   }
})()*/
