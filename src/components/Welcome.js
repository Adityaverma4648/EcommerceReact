import React, { useEffect } from 'react';
import {Link} from "react-router-dom";

const Welcome = () => {
  
  const animation = () =>{
      var heading = document.getElementsByClassName(".textAnime");
      
         var text = "Welcome to Shopzy!";

        //   loop throuh string
        //  for (let i = 0; i < text.length; i++) {
        //     var content = <span>text[i]</span>;
        //     console.log(content);

            //  dom rendering
            heading.innerHTML += text; 
             //  }
     
  }
   useEffect(()=>{
      animation();
   },[])

  return (
    <div className='w-screen h-1/2 flex justify-center items-center'>
        <div className="w-1/2 h-full flex justify-center items-center z-20">
             <div className='h-full flex flex-col justify-center items-center' >
               <h3 className='text-6xl font-bold textAnime'  >
                  
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
        <div className='w-1/2 h-full hidden md:flex md:justify-center md:items-center md:relative'>
              {/* <img src="https://cdni.iconscout.com/illustration/premium/thumb/welcome-3688628-3231459.png?f=webp" className='select-none h-10/12 w-auto' alt="home" /> */}

               <div className='w-full h-full bg-red-400 felx justify-center items-center' id='welcomeAnimation'  >
                      <div>

                      </div>
               </div>
        </div>
    </div>
  )
}

export default Welcome