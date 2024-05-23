import axios from "axios";
import { useState } from "react"
import { useAuthContext } from "../context/AuthContext";
import { defaults } from "autoprefixer";


const useLogout=()=>{
    const [loading,setLoading]=useState(false);
    const {setAuthUser}= useAuthContext();

    const logout=async()=>{
        setLoading(true);
        try{
            const res=await axios.post("/api/v1/auth/logout")
            .then(response=>{
                if(response.error){
                    throw new Error(data.error);
                }
            })

            localStorage.removeItem("chat-user");
            setAuthUser(null);
        } catch(err){
            toast.error(err.message);
        } finally{
            setLoading(false);
        }
    };

    return {loading, logout};
}

export default useLogout;