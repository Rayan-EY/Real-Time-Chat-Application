import { jwt } from "jsonwebtoken";

const generateToken=(userId, res)=>{

    const token=jwt.sign( {userId}, process.env.JWT_SECRET, {
        expiresIn: '15d'
    }) 

    res.cookie("token",token,{ 
        maxAge: 15 * 24 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict"
    })
}

export default generateToken;