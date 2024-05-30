import express from "express";
import path from "path";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser"

import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";

import connectDB from "./db/connectDB.js";

import { app, server } from "./socket/socket.js";


dotenv.config()

const PORT=process.env.PORT;

const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/messages",messageRoutes);
app.use("/api/v1/users",userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*" , (req,res)=>{
    res.sendFile(path.join(__dirname, "frontend","dist","index.html"));
    
})

server.listen(PORT, ()=>{
    connectDB();
    console.log(`running on ${PORT}`);
    
})

