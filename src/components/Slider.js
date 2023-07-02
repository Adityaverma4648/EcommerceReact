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
    <div className='w-screen md:h-1/2 h-4/6 relative flex justify-center items-center border border-black bg-orange-300'>
       
    </div>
  )
}

export default Slider