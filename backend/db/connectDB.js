import { mongoose } from "mongoose";

const connectDB=async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connected to db");
    }catch(err){
        console.log("Internal server error/cant connect to db",err.message);
    }
}
export default connectDB;