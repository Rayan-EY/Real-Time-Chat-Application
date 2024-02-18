import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";

const app=express();
dotenv.config()

const PORT=process.env.PORT;

app.get("/",(req,res)=>{
    res.json({msg:"HELLO"})
})

app.use("/api/v1/auth",authRoutes);

app.listen(PORT, ()=>{
    console.log(`running on ${PORT}`);
   
})

