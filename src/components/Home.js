import React from "react";
import { useState } from "react";

import { Link } from "react-router-dom";
import Tour from "../svg/Tour.svg";
import {
  FaExternalLinkAlt,
  FaCompass,
  FaFingerprint,
  FaCaretLeft,
  FaCaretRight,
} from "react-icons/fa";

const Home = () => {
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


  const SliderDecrementor = ()=>{
          var prevIndex = sliderIndex;
    if (prevIndex <= 1) {
      prevIndex = 3;
      setSliderindex(prevIndex);
    } else {
      prevIndex -= 1;
      setSliderindex(prevIndex);
    }
  }
  return (
    <div className="CompContainer">
      <div className="container-fluid d-flex justify-content-center align-items-center" style={{minWidth:"100vw"}}>
        {/* header illustrations */}
        <div
          className="illustrationCont container position-absolute right-0 d-flex justify-content-end"
          style={{height: "35vh" }}
        >
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/welcome-banner-decoration-3688632-3231445.png"
            alt="Welcome illustration"
            style={{ height: "95%" }}
          />
        </div>
        {/* illustrationCont ends here */}
        <div className="welcomeHomeCont container-fluid my-1 d-flex flex-column align-items-center justify-content-center pt-4" style={{minWidth :"100vw"}}>
          <h4>Welcome to ShopCart</h4>
          <span>
            The 2023 Best Online Retail Store with over 2B users in the world.
            Explore Sign Up.....
            <FaExternalLinkAlt
              className="ms-3"
              style={{ fontSize: "16px" }}
            ></FaExternalLinkAlt>
          </span>
          <div className="py-4 welcomeHomeButtonCont d-flex justify-content-evenly align-items-center">
            <Link to="/explore">
              <button type="button" className="btn">
                <FaCompass className="me-1" />
                Explore
              </button>
            </Link>
            <Link to="/signUp">
              <button type="button" className="btn">
                <FaFingerprint className="me-1" />
                SignUp
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/*  sliderCont */}
      <div
        className="welcomeHomeContSlider px-1 container position-relative d-flex justify-content-between align-items-center"
        style={{ height: "50vh" }}
      >
        <div
          className="arrowIcons rounded-1 p-3 d-flex justify-content-center align-items-center me-1"
          onClick={SliderDecrementor}
          
          style={{
                  height: "48vh",
             zIndex: "9",
             cursor: "pointer",
             fontSize: "21px",
          }}
        >
          <FaCaretLeft />
        </div>
        <div
          className="img-container d-flex justify-content-center align-items-center"
          style={{ width: "100%", height: "48vh" }}
        >
          {SliderImages?.slice(sliderIndex-1, sliderIndex).map((ar) => {
            return (
              <div
                className="img-container-child"
                key={ar.id}
                sytle={{ height: "100%", width: "100%" }}
              >
                <img src={ar.src} alt={ar.alt} style={{ width: "100%" }} />
              </div>
            );
          })}
        </div>
        <div
          className="arrowIcons rounded-1 p-3 d-flex justify-content-center align-items-center ms-1"
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
  );
};

export default Home;
