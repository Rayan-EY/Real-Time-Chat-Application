import React, { useEffect, useState } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';

const useGetConversations = () => {
  const [loading,setloading] = useState(false);
  const [conversations,setConversations] = useState([]);

    useEffect(()=>{
        const getConversations =async()=>{
            setloading(true);

            try {
                const res=await axios.get("/api/v1/users")
                .then(response=>{
                    if(response.error){
                        throw new Error(response.error);
                    }
                   
                    

                    setConversations(response.data);
                })
            } catch (error) {
                toast.error(error.message);   
            } finally{
                setloading(false);
            }
        }

        getConversations();
    },[]);
    return {loading,conversations}
}

export default useGetConversations
