export const signup=async (req,res)=>{
    try{
        const {name,username,password,confirmpassword}=req.body;
    }catch(err){

    }
};
export const login=(req,res)=>{
    res.json({msg:"login"})
};
export const logout=(req,res)=>{
    res.json({msg:"logout"})
};