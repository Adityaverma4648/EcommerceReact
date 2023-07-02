import React, { useEffect } from 'react';
import {Link} from "react-router-dom";

import hero from "../Img/anatomy.png";

const Welcome = () => {
  
  // const animation = () =>{
  //     var heading = document.getElementById(".textAnime");
      
  //        var text = "Welcome to Shopzy!";

  //       //   loop throuh string
  //        for (let i = 0; i < text.length; i++) {
  //           var content = '<span>text[i]</span>';
  //            heading.innerHTML += content;
  //         }
     
  // }
  //  useEffect(()=>{
  //     animation();
  //  },[])

  return (
    <div className='w-screen md:h-1/2 h-4/6 flex justify-center items-center bg-orange-300'>
        <div className='xl:w-9/12 w-11/12 h-full flex justify-center items-center' >
        <div className="md:w-1/2 h-full flex justify-center items-center">
             <div className='h-3/6 w-full flex flex-col justify-evenly items-center' >
               <div className='text-6xl font-bold flex justify-center items-center text-center'>
                   Welcome To Shopzy!
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
        <div className='w-1/2 h-full hidden md:flex md:justify-center md:items-center md:relative'>
               <div className='w-full h-full  flex justify-center items-center relative'>
                    <img src={hero} className='w-full h-auto xl:absolute xl:bottom-0' alt="hero" />
               </div>
        </div>
        </div>
    </div>
  )
}

export default Welcome