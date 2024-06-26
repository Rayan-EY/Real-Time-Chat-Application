import { useEffect, useState } from "react"
import useConversation from "../store/useConversation";
import axios from "axios";
import toast from "react-hot-toast";


const useGetMessages = () => {
  const [loading,setLoading]=useState(false);

  const {messages,setMessages, selectedConversation}=useConversation();

  useEffect(()=>{

    const getMessages = async()=>{
        setLoading(true);
        try {
            const res=await axios.get(`/api/v1/messages/${selectedConversation._id}`)
            .then(response=>{
                if(response.error){
                    throw new Error(response.error);
                }
                console.log(response.data);
                setMessages(response.data);
            })
            
        } catch (error) {
            toast.error(error.message);
        } finally{
            setLoading(false);
        }
    }
    if(selectedConversation?._id)
        getMessages();
  },[selectedConversation?._id, setMessages])

    return {loading,messages};
 
}

export default useGetMessages
