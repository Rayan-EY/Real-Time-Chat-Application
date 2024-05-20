import React, { useState } from 'react'
import GenderBox from './GenderBox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'

const Signup = () => {

  const [inputs,setInputs]=useState({
    name:'',
    username:'',
    password:'',
    confirmPassword:'',
    gender:''
  })

  const {loading, signup}=useSignup();

  const handleCheckbox=(g)=>{
    setInputs({...inputs,gender:g});
  }

  const handleSubmit=async (e)=>{
    e.preventDefault();
    await signup(inputs);
  }

  return (
    <div>
      <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className ="h-full w-full p-4 bg-blue-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100">
          <h1 className='text-3xl font-semibold text-center text-gray-300'>
            Signup
          
          <span className='text-blue-500'> ChatApp</span>
          </h1>
         

    <form onSubmit={handleSubmit}>
        <div>  
          <label className="label p-2">
              <span className="text-base label-text">Fullname</span>
          </label>
              <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" value={inputs.fullName} onChange={(e)=>setInputs({...inputs,name:e.target.value})}/>    
         </div>
         <div>  
          <label className="label p-2">
              <span className="text-base label-text">Username</span>
          </label>
              <input type="text" placeholder="name@123" className="input input-bordered w-full max-w-xs" value={inputs.username} onChange={(e)=>setInputs({...inputs,username:e.target.value})}/>    
         </div>
         <div>
             <label className="label p-2">
                 <span className="text-base label-text">Password</span>
             </label>
              <input type="password" placeholder="Enter Password" className="input input-bordered w-full max-w-xs" value={inputs.password} onChange={(e)=>setInputs({...inputs,password:e.target.value})}/>    
         </div>
         <div>
             <label className="label p-2">
                 <span className="text-base label-text">Confirm Password</span>
             </label>
              <input type="password" placeholder="Enter Password" className="input input-bordered w-full max-w-xs" value={inputs.confirmPassword} onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})}/>    
         </div>
         <GenderBox onCheckBoxChange={handleCheckbox} selectedGender={inputs.gender}/>
             <br></br>
             <Link to='/login' className="link link-hover">{"Already"} have an account?</Link>
         <div>
             <button className="btn btn-block mt-2">Signup</button>
         </div>
         </form>
            
         </div>
     </div>
     </div>

        
  )
}

export default Signup

