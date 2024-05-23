import { useState } from "react";
import { Link } from "react-router-dom"
import useLogin from "../../hooks/useLogin";


const Login = ()=>{

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const {loading,login} = useLogin();

    const handleSubmit =async (e)=>{
        e.preventDefault();
        console.log(username,password);
        await login({username,password});
    }


    return <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className ="h-full w-full p-4 bg-blue-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100">
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
            Login
            <span className='text-blue-500'> ChatApp</span>
        </h1>

    <form onSubmit={handleSubmit}>
        <div>
            <label className="label p-2">
                <span className="text-base label-text">Username</span>
            </label>
             <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" 
             value={username}
             onChange={(e)=>setUsername(e.target.value)}
             />    
        </div>
        <div>
            <label className="label p-2">
                <span className="text-base label-text">Password</span>
            </label>
             <input type="password" placeholder="Type here" className="input input-bordered w-full max-w-xs" 
             
             value={password}
             onChange={(e)=>setPassword(e.target.value)}/>    
        </div>
            <br></br>
            <Link to='/signup' className="link link-hover">{"Don't"} have an account?</Link>


        <div>
            <button className="btn btn-block mt-2"
            disabled={loading}>{loading ? <span className="loading loading-spinner text-primary"></span> : "Login"}
            </button>
        </div>
        </form>
            
        </div>
    </div>
}

export default Login



