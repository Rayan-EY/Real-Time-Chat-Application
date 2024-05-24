import { useState } from "react"
import useConversation from "../store/useConversation";
import toast from 'react-hot-toast'
import axios from 'axios'

const useSendMessage = () => {
  const [loading,setLoading] = useState();

  const {messages,setMessages, selectedConversation}= useConversation();

  const sendMessage =async (message)=>{
    setLoading(true);
    try {
        
        const res=await axios.post(`/api/v1/messages/send/${selectedConversation._id}`,{message})
        .then(response=>{
            if(response.error){
                throw new Error(data.error);
            }
           console.log("rayan",response.data);
           
           setMessages([...messages,response.data.newMessage]);
        })


    } catch (error) {
        toast.error(error.message);
    } finally {
        setLoading(false);
    }
  }

  return {loading,sendMessage};
}

export default useSendMessage
