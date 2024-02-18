import User from "../models/userModel.js"; 
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const signup=async (req,res)=>{
    try{
        const {name,username,gender,password,confirmpassword}=req.body;

        if(password!=confirmpassword){
            return res.status(400).json({error:"Passwords dont match"})
        }

        const user=await User.findOne({username});

        if(user){
            return res.status(400).json({error:"Username already exists"})
        }
        const salt=await bcrypt.genSalt(10);
        const hashedPass=await bcrypt.hash(password,salt);
        const boyProfilePic=`https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProflePic=`https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser=new User({
            name,
            username,
            password:hashedPass,
            gender,
            profilePic: gender === 'male' ? boyProfilePic : girlProflePic
        })

        if(newUser){
            const id=newUser._id;
            const token=jwt.sign({id},process.env.JWT_SECRET,{
                expiresIn:'15d'
        })
            await res.cookie("token",token,{
                maxAge: 15 * 24 * 60 * 60 * 1000,
                httpOnly : true,
                sameSite:"strict",
                secure: process.env.NODE_ENV !== "development"
        })
        }

        await newUser.save();

        res.status(201).json({
            _id:newUser._id,
            name:newUser.name,
            username:newUser.username,
            profilePic: newUser.profilePic,
        })
    

    }catch(err){
        console.log(err);
        res.status(500).json({error:"Internal Server Error"})

    }
};
export const login=async (req,res)=>{
    try{
        const {username,password}=req.body;
        
        const result=await User.findOne({
            username
        })
        const passwordCheck=await bcrypt.compare(password,result?.password || "")

        if(!result || !passwordCheck){
            return res.status(400).json({
                error:"Invalid username or password"
            })
        }

        
        const id=result._id;
        const token=jwt.sign({id},process.env.JWT_SECRET);
        await res.cookie("token",token,{
            maxAge: 15 * 24 * 60 * 60 * 1000,
            httpOnly : true,
            sameSite:"strict",
            secure: process.env.NODE_ENV !== "development"

    })

    res.status(201).json({
        _id:result._id,
        name:result.name,
        username:result.username,
        profilePic: result.profilePic,
    })
           
        
    } catch(err){
        console.log(err);
        res.status(500).json({
            error:"Internal Server Error"
        })
    }
};
export const logout=(req,res)=>{
    try{
        res.cookie("token","",{ maxAge:0 });
        res.status(200).json({ msg:"Logged out successfully"})

    } catch(err){
        console.log(err);
        res.status(500).json({
            error:"Internal Server Error"
        })
    }
   
};