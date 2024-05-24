import Conversation from "../models/conversationmodel.js";
import Message from "../models/messagemodel.js";
import { getReceiverSocketId, io } from "../socket/socket.js";


export const sendMessage = async(req,res)=>{
    try {
        const {message}=req.body;
        const {id:receiverId}=req.params;

        const senderId=req.user._id;

       

        let conversation = await Conversation.findOne({
            participants:{ $all :[senderId, receiverId]}
        })
        
        if(!conversation){
            conversation = await Conversation.create({
                participants:[senderId,receiverId]
            })
        }

        const newMessage= new Message({
            senderId,
            receiverId,
            message
        })

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }



        await Promise.all([conversation.save(), newMessage.save()]);

        const receiverSocketId=getReceiverSocketId(receiverId);
        if(receiverSocketId){
            
            io.to(receiverSocketId).emit("newMessage",newMessage);
        }

        res.status(201).json({message:"Sent successfully",newMessage});

    } catch (error) {
        console.log(error.message);
        res.status(500).json({error:"Internal server error"});
    }
}

export const getMessages=async (req,res)=>{

    try {
        const {id:userToChatId}=req.params;
        const senderId=req.user._id;

        const conversation = await Conversation.findOne({
           participants:{ $all :[senderId, userToChatId]}
        }).populate("messages");

        if(!conversation)
            return res.status(200).json([]);

        res.status(201).json(conversation.messages);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({error:"Internal server error"});
    }
}