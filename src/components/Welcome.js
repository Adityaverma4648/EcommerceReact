import React, { useEffect } from 'react';
import {Link} from "react-router-dom";

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
    <div className='w-screen h-1/2 flex justify-center items-center'>
        <div className="md:w-1/2 h-full flex justify-center items-center">
             <div className='h-3/6 flex flex-col justify-evenly items-center' >
               <div className='text-6xl font-bold text-center' id="textAnime" >
                   Welcome To Shopzy!
               </div>
              <div className='text-center font-semibold' >
                Buying and Selling made easy for you 
              </div>
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
        <div className='w-1/2 h-full hidden md:flex md:justify-center md:items-center md:relative'>
               {/* <div className='w-full h-full bg-red-400 felx justify-center items-center' id='welcomeAnimation'  >
                      <div>

                      </div>
               </div> */}
        </div>
    </div>
  )
}

export default Welcome