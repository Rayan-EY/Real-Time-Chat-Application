import React from 'react'
import GenderBox from './GenderBox'

const Signup = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className ="h-full w-full p-4 bg-blue-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100">
          <h1 className='text-3xl font-semibold text-center text-gray-300'>
            Signup
          
          <span className='text-blue-500'> ChatApp</span>
          </h1>
         

    <form>
        <div>  
          <label className="label p-2">
              <span className="text-base label-text">Fullname</span>
          </label>
              <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />    
         </div>
         <div>  
          <label className="label p-2">
              <span className="text-base label-text">Username</span>
          </label>
              <input type="text" placeholder="name@123" className="input input-bordered w-full max-w-xs" />    
         </div>
         <div>
             <label className="label p-2">
                 <span className="text-base label-text">Password</span>
             </label>
              <input type="text" placeholder="Enter Password" className="input input-bordered w-full max-w-xs" />    
         </div>
         <div>
             <label className="label p-2">
                 <span className="text-base label-text">Confirm Password</span>
             </label>
              <input type="text" placeholder="Enter Password" className="input input-bordered w-full max-w-xs" />    
         </div>
         <GenderBox />
             <br></br>
             <a href='e' className="link link-hover">{"Already"} have an account?</a>
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

