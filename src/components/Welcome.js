import React, { useState , useEffect } from 'react';
import {Link} from "react-router-dom";

import hero from "../Img/anatomy.png";

const Welcome = () => {
  
  const [wordOne, setWordOne] = useState(["W", "e", "l", "c","o","m","e",]);
  const [wordTwo, setWordTwo] = useState(["T","o",]);
  const [wordThree, setWordThree] = useState([ "S","h","o","p","z","y","!"]);
  return (
    <div className='w-screen md:h-1/2 h-4/6 flex justify-center items-center bg-orange-300'>
        <div className='xl:w-9/12 w-11/12 h-full flex justify-center items-center' >
        <div className="md:w-1/2 h-full flex justify-center items-center">
             <div className='h-3/6 w-full flex flex-col justify-evenly items-center' >
               <div className='text-6xl font-bold flex flex-wrap justify-center items-center text-center cursor-pointer'>
                   <div className='flex mx-1'>
                   {wordOne?.map((d , index)=>{
                        return <div key={index} className='transition-all ease-in-out hover:delay-150 hover:scale-110 hover:animate-bounce motion-reduce:transition-none motion-reduce:hover:transform-none'>
                             {d}
                             </div>
                   })}
                   </div>

                  <div className='flex mx-1'>
                     {wordTwo?.map((d , index)=>{
                        return <div key={index} className='transition-all ease-in-out hover:delay-150 hover:scale-110 hover:animate-bounce motion-reduce:transition-none motion-reduce:hover:transform-none '>
                             {d}
                             </div>
                   })}
                     </div>
                  
                   <div className='flex mx-1'>
                   {wordThree?.map((d , index)=>{
                        return <div key={index} className='transition-all ease-in-out hover:delay-150 hover:scale-110 hover:animate-bounce motion-reduce:transition-none motion-reduce:hover:transform-none '>
                             {d}
                             </div>
                   })}
                   </div>
               </div>
              <div className=' flex md:justify-center justify-start items-center font-semibold' >
                Buying and Selling made easy for you 
              </div>
              <div className='my-2 flex md:justify-center justify-start items-center' >
                         <Link to='/explore' className='text-decoration-none text-white bg-gray-900 px-4 py-2 mx-1 rounded-full' >
                             Explore
                         </Link>
                         <Link to='/signUp' className='text-decoration-none text-black bg-white px-4 py-2 mx-1 rounded-full' >
                             SignUp
                         </Link>
              </div>
             </div>
        </div>
        <div className='w-1/2 h-full hidden lg:flex lg:justify-center lg:items-center lg:relative'>
               <div className='w-full h-full flex justify-center items-end relative'>
                    <img src={hero} className='lg:w-full md:w-auto h-auto xl:absolute xl:bottom-0' alt="hero" />
               </div>
        </div>
        </div>
    </div>
  )
}

export default Welcome