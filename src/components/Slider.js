import React , {useEffect, useState} from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa"
import img1 from "../Img/highlight-id-vGIVCmW7BtE-unsplash.jpg";
import img2 from "../Img/jacek-dylag-jo8C9bt3uo8-unsplash.jpg";
import img3 from "../Img/tamara-bellis-68csPWTnafo-unsplash.jpg";



const Slider = () => {
  
   const [index, setIndex] = useState(0);
   const [slide, setSlide] = useState([]);

   const SliderData = [{
                        id : 1,
                        image : img1,
                        title : "Get the best Brands all Over the world!",
                        body : ""
                       },
                      {
                         id : 2,
                         image : img2,
                      },
                      {
                        id : 3,
                        image : img3,
                      },{
                        id : 4,
                        image : img1,
                        title : "Get the best Brands all Over the world!",
                        body : ""
                       },
                      {
                         id : 5,
                         image : img2,
                      },
                      {
                        id : 6,
                        image : img3,
                      }]


  const increment = (e) =>{
      if(index < SliderData.length-1){
         setIndex(index+1);
      }else if(index === 5){
         setIndex(0);
      }
  }

   const decrement = (e) =>{
      if(index > 0){
         setIndex(index-1);
      }else if(index === 0){
         setIndex(SliderData.length-1);
      }
   }

   const clickIndex = (id) =>{
      setIndex(id - 1);
   }

   useEffect(()=>{
      setSlide([SliderData[index]]);
   },[index]);

  return (
    <div className='w-screen md:h-1/2 h-1/2 flex justify-center items-center border border-black bg-orange-300 relative'>
       <button type='button' className='absolute left-0 ms-4 z-30' onClick={decrement} >
          <FaArrowAltCircleLeft />
       </button>

       <div className='w-full h-full flex justify-center items-center' >
          {slide?.map((d)=>{
            return   <div key={d.id}  className='w-full h-full flex justify-center items-center' >
                        <div  className='md:w-1/2 w-full h-full flex flex-col justify-center items-center z-20 relative'>
                               <div className='font-semibold text-xl' >
                                {d.title && d.title}
                               </div>
                              {index}
                        </div>
                         <div className='h-full md:w-1/2 w-full flex justify-center items-center md:relative absolute end-0' >
                           <div className='z-10 h-full w-full bg-gradient-to-r from-orange-300 to-orange-300/10 relative' ></div>

                           <div className='w-full h-full flex justify-end items-center absolute' >
                           <img src={d.image} className='h-full select-none' alt="" />
                           </div>
                         </div>
                     </div>
          })}
        
       </div>

       <button type='button' className='absolute end-0 me-4 z-30' onClick={increment} >
          <FaArrowAltCircleRight />
       </button>

       <div className='bottom-0 absolute flex justify-center items-center z-50 my-4' >
                 {SliderData.map((d)=>{
                    return <div key={d.id}className='cursor-pointer w-3 h-3 bg-orange-400 mx-2 rounded-full' onClick={()=>{clickIndex(d.id)}} ></div>
                 })}
          </div>
    </div>
  )
}

export default Slider