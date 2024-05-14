import jwt from "jsonwebtoken";
import User from "../models/userModel.js"
const authMiddleware=async (req,res,next)=>{

    try {
        const token=req.cookies.token;

        if(!token){
           return res.status(500).json({error:"No token provided"});

        }

        const decoded=jwt.verify(token, process.env.JWT_SECRET);

        if(!decoded){
            return res.status(500).json({error:"Unauthorised"});

        }

        const user=await User.findById(decoded.id).select("password");

        if(!user){
            return res.status(500).json({error:"No user found"});
        }
        
        req.user=user;
        next();
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({error:"Internal server error"});
        
    }
}

export default authMiddleware;