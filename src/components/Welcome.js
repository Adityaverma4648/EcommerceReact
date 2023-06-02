import React from 'react';
import {Link} from "react-router-dom";

const Welcome = () => {
  return (
    <div className='w-screen bg-white flex justify-center items-center' style={{minHeight : "40vh"}}>
        <div className="w-1/2 h-full flex justify-end items-center z-20">
             <div className='h-full flex flex-col justify-center items-center' >
             <h3 className='' >
                Welcome to Shopzy !
              </h3>
              <span className='text-center text-slate-600' >
                Lorem ipsum dolor sit amet consectetur.
              </span>
              <div className='w-10/12 my-2 flex justify-center items-center' >
                         <Link to='/explore' className='text-decoration-none text-black border border-info border-opacity-50 px-4 py-2 mx-1' >
                             Explore
                         </Link>
                         <Link to='/signUp' className='text-decoration-none text-black border border-danger border-opacity-50 px-4 py-2 mx-1' >
                             SignUp
                         </Link>
              </div>
             </div>
        </div>
        <div className='w-1/2 hidden md:flex md:justify-start md:items-center  md:relative'>
              <img src="https://cdni.iconscout.com/illustration/premium/thumb/welcome-3688628-3231459.png?f=webp" className='select-none' alt="home" />
        </div>
    </div>
  )
}

export default Welcome