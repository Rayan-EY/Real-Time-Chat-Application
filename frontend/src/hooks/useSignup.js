import { data } from 'autoprefixer';
import axios from 'axios';

import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useSignup =() => {
    const [loading,setLoading]=useState(false);
    const {setAuthUser}=useAuthContext();

    const signup=async ({name,username,password,confirmPassword,gender})=>{
        const inputValidation= handleInputErrors({name,username,password,confirmPassword,gender});

        if(!inputValidation)
            return;
        setLoading(true);
        try {
         const res=await axios.post('api/v1/auth/signup', {name,username,password,confirmPassword,gender})
            .then(response=>{
                if(response.error){
                    throw new Error(data.error);
                }
                console.log(response.data);
                const data=response.data;
            localStorage.setItem("chat-user",JSON.stringify(data));

            setAuthUser(data);
                
            })
            

        } catch (error) {
            toast.error(error.message);
            
        } finally{
            setLoading(false);
        }
        
    }
    return {loading , signup};
    
}
 

export default useSignup;

function handleInputErrors({name,username,password,confirmPassword,gender}){
    if(!name || !username || !password || !confirmPassword || !gender){
        toast.error('Please fill the necessary fields');
        return false;
    }
    if(password != confirmPassword)
        {
            toast.error('Passwords do not match');
            return false;
        }

    if(password.length < 6)
        {
            toast.error('Password must be at least 6 characters long');
            return false;
        }
    return true;
}
