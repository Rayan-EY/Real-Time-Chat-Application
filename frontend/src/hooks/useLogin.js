import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';
import axios from 'axios';

const useLogin = () => {
    const [loading,setLoading]=useState(false);
    const {setAuthUser} = useAuthContext();
  
    const login=async({username,password})=>{
        setLoading(true);
        try {
            const res=await axios.post("/api/v1/auth/login",{username,password})
            .then(response =>{

                if(response.error){
                    throw new Error(data.error);
                }
                console.log(response.data);
                const token=response.data;
                localStorage.setItem("chat-user",JSON.stringify(token));
                setAuthUser(token);

            })
            
        } catch (error) {
            toast.error(error.message);
        } finally{
            setLoading(false);
        }
    }

    return {loading,login};
}

export default useLogin
