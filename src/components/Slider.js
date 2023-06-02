import React , {useEffect, useState} from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa"
import img1 from "../Img/be202271-1932-4abd-bde3-b73503577adc.jpg";
import img2 from "../Img/c7d94659-af07-4498-ad49-befa8db2014d.jpg";
import img3 from "../Img/de05edb4-5dbe-471a-923f-ffafb580b072.jpg";



const Slider = () => {
  
   const [index, setIndex] = useState(0);
   const [slide, setSlide] = useState([]);

   const SliderData = [{
                        id : 1,
                        image : img1,
                       },
                      {
                         id : 2,
                         image : img2,
                      },
                      {
                        id : 3,
                        image : img3,
                      }]


  const increment = (e) =>{
      //  alert(index , JSON.stringify(SliderData.length));
      if(index < SliderData.length-1){
         setIndex(index+1);
      }
  }

   const decrement = (e) =>{
      if(index > 0){
         setIndex(index-1);
         console.log(index);
      }
   }

   useEffect(()=>{
      setSlide([SliderData[index]]);
      console.log(slide);
   },[index]);

  return (
    <div className='w-screen h-1/2 relative flex justify-center items-center border border-black'>
       <div className='w-screen h-full absolute z-40 flex justify-center items-center' >
         <button type='button' className='absolute left-10 rounded-full' onClick={decrement} >
            <FaArrowAltCircleLeft className='text-2xl text-black' />
         </button>
           {slide?.map((d)=>{
                 return <div key={d.id} className='flex justify-center items-center' style={{width : "80%",height : "98%"}}>
                    <img src={d.image} alt={d.id} className='select-none h-full w-full' />
                 </div>            
           })}
        <button type='button' className='absolute right-10 rounded-full' onClick={increment} >
           <FaArrowAltCircleRight className='text-2xl text-black' />
        </button>
    </div>
    {/*  wave svg */}
      <div className='w-screen relative h-full bg-white flex justify-start items-start' >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='w-full' ><path fill="rgb(143, 146, 217)" fill-opacity="1" d="M0,128L60,117.3C120,107,240,85,360,101.3C480,117,600,171,720,213.3C840,256,960,288,1080,272C1200,256,1320,192,1380,160L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
      </div>
    </div>
  )
}

export default Slider