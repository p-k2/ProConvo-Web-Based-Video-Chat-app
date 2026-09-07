import express from "express" ;
import {createServer} from "node:http";

import mongoose from "mongoose";

import cors from "cors" ;

import {connectToSocket} from "./controller/socketMAnager.js"

const app = express()
const server = createServer(app) ;
const io = connectToSocket(server) ;

app.set("port" , (process.env.PORT || 8000))
app.use(cors()) ;
app.use(express.json({limit: "40kb" })) ;
app.use(express.urlencoded({ limit: "40kb" , extended: true})) ;

const start = async()=>{

    app.set("mongo_user")
   const connectionDB = await mongoose.connect("mongodb+srv://kaurpalak193_db_user:EXkp5E8Py1GKpKTF@cluster0.ouc00ss.mongodb.net/") 
   
   console.log(`Mongo conected via ${connectionDB.connection.host}`)
   server.listen(app.get("port") ,()=>{
    console.log("Listening to port 8000");
   })


}

start() ;