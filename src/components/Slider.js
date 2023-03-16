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
            <div className="welcomeHomeContSliderCont container-fluid">
            <div
              className="welcomeHomeContSlider px-1 container position-relative d-flex justify-content-between align-items-center"
              style={{ height: "50vh" }}
            >
              <div
                className="arrowIcons rounded-1 md:relative flex justify-center items-center text-center me-1 absolute start-0 px-2"
                onClick={SliderDecrementor}
                style={{
                  height: "48vh",
                  zIndex: "9",
                  cursor: "pointer",
                  fontSize: "25px",
                }}
              >
                <FaCaretLeft />
              </div>
              <div
                className="md:img-container"
              >
                {SliderImages?.slice(sliderIndex - 1, sliderIndex).map((ar) => {
                  return (
                    <div
                      key={ar.id}
                    >
                      <img src={ar.src} alt={ar.alt} />
                    </div>
                  );
                })}
              </div>
              <div
                className="arrowIcons rounded-1 md:relative flex justify-center items-center text-center ms-1 absolute end-0 px-2"
                onClick={SliderIncrementor}
                style={{
                  height: "48vh",
                  zIndex: "9",
                  cursor: "pointer",
                  fontSize: "21px",
                }}
              >
                <FaCaretRight />
              </div>
            </div>
          </div>
         )
       }
export default Slider;