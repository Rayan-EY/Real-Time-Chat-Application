import mongoose from 'mongoose';

const messageSchema=new mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    receiverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    message:{
        type:String,
        required:true
    },

}, { timestamps: true} )// to assign time of message sent in the db

const Message=mongoose.Model("Message",messageSchema);

export default Message;