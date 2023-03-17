import React,{useState} from 'react';
import {FaCaretLeft , FaCaretRight} from "react-icons/fa";


const Slider = () => {

        // sliderData
  const SliderImages = [
    {
      id: 1,
      src: "https://icms-image.slatic.net/images/ims-web/c7d94659-af07-4498-ad49-befa8db2014d.jpg",
      alt: "001",
    },
    {
      id: 2,
      src: "https://icms-image.slatic.net/images/ims-web/de05edb4-5dbe-471a-923f-ffafb580b072.jpg",
      alt: "002",
    },
    {
      id: 3,
      src: "https://icms-image.slatic.net/images/ims-web/be202271-1932-4abd-bde3-b73503577adc.jpg",
      alt: "003",
    },
  ];

        const [sliderIndex, setSliderindex] = useState(1);
        // sliderIncrement fun
        const SliderIncrementor = () => {
          var prevIndex = sliderIndex;
          if (prevIndex > 2) {
            prevIndex = 1;
            // prevIndex += 1;
            // console.log(prevIndex);
            setSliderindex(prevIndex);
          } else {
            prevIndex += 1;
            // console.log(prevIndex);
            setSliderindex(prevIndex);
          }
        };
        // SliderDecrement fun
        const SliderDecrementor = () => {
          var prevIndex = sliderIndex;
          if (prevIndex <= 1) {
            prevIndex = 3;
            setSliderindex(prevIndex);
          } else {
            prevIndex -= 1;
            setSliderindex(prevIndex);
          }
        };

        return (
            <div className="welcomeHomeContSliderCont w-screen flex justify-center items-center">
            <div
              className="welcomeHomeContSlider py-1 w-full h-80 md:w-8/12 md:h-auto relative d-flex justify-content-between align-items-center"
            >
              <div
                className="rounded-1 md:relative flex justify-center items-center text-center ms-2 md:me-1 absolute start-0 p-2 bg-white cursor-pointer"
                onClick={SliderDecrementor}
              >
                <FaCaretLeft />
              </div>
              <div className='h-full w-auto flex justfy-center items-center'>
                {SliderImages?.slice(sliderIndex - 1, sliderIndex).map((ar) => {
                  return (
                    <div
                      className='h-full w-auto flex items-center justify-center'
                      key={ar.id}
                    >
                      <img src={ar.src} className="h-full w-auto" alt={ar.alt} />
                    </div>
                  );
                })}
              </div>
              <div
                className="rounded-1 md:relative flex justify-center items-center text-center me-2 md:ms-1 absolute end-0 p-2 bg-white cursor-pointer"
                onClick={SliderIncrementor}
              >
                <FaCaretRight />
              </div>
            </div>
          </div>
         )
       }
export default Slider;