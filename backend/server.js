import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser"
import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";

import connectDB from "./db/connectDB.js";

const app=express();
dotenv.config()

const PORT=process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/messages",messageRoutes);


app.listen(PORT, ()=>{
    connectDB();
    console.log(`running on ${PORT}`);
    
})

