import React from "react";
import { useState } from "react";

import { Link } from "react-router-dom";
// import Tour from "../svg/Tour.svg";
import clothing from "../svg/clothing.svg";
import desktop from "../svg/desktop.svg";
import sport from "../svg/sport.svg";
import sneaker from "../svg/sneaker.svg";
import watch from "../svg/watch.svg";

import {
  FaExternalLinkAlt,
  FaCompass,
  FaFingerprint,
  FaCaretLeft,
  FaCaretRight,
  FaShoppingBag,
} from "react-icons/fa";

const Home = () => {
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
  // CategoryData
  const Categories = [
    {
      id: 1,
      heading: "Clothes",
      src: clothing,
    },
    {
      id: 2,
      heading: "Electronics",
      src: desktop,
    },
    {
      id: 3,
      heading: "Sport Accessories",
      src: sport,
    },
    {
      id: 4,
      heading: "Shoes & socks",
      src: sneaker,
    },
    {
      id: 5,
      heading: "Watches",
      src: watch,
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

  const onScrollAnimation = () => {
    const illustrationCont = document.getElementById("illustrationCont");
    illustrationCont.classList.add("onScrollAnimation");
  };
  return (
    <div className="CompContainer">
      <div
        className="container-fluid d-flex justify-content-center align-items-center"
        style={{ minWidth: "100vw" }}
      >
        {/* header illustrations */}
        <div
          className="illustrationCont container position-absolute right-0 d-flex justify-content-end"
          style={{ height: "35vh" }}
          onScroll={onScrollAnimation}
          id="illustrationCont"
        >
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/welcome-banner-decoration-3688632-3231445.png"
            alt="Welcome illustration"
            style={{ height: "95%" }}
          />
        </div>
        {/* illustrationCont ends here */}
        <div
          className="welcomeHomeCont container-fluid mt-1 d-flex flex-column align-items-center justify-content-center pt-4"
          style={{ minWidth: "100vw" }}
        >
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
      <div className="welcomeHomeContSliderCont container-fluid">
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
            {SliderImages?.slice(sliderIndex - 1, sliderIndex).map((ar) => {
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

      <div className="allCategoriesCont container-fluid d-flex flex-column justify-content-center align-items-center bg-light">
        <div className="container-fluid d-flex justify-content-center align-items-center py-4 h3 catHeading">
          <span className="container bg-transparent">
            <FaShoppingBag className="me-2 shakeIcons" />
            Categories
          </span>
        </div>
        <div
          className="container d-flex flex-wrap justify-content-center align-items-center"
          style={{ height: "30vh" }}
        >
          {Categories.map((ar) => {
            return (
              <a
                href="https://localhost:3000/category?id"
                className="border border-1 border-dark text-decoration-none text-dark col-sm-2 m-1 d-flex flex-column justify-content-center align-items-center"
              >
                <img
                  src={ar.src}
                  alt={ar.heading}
                  className="p-2"
                  style={{ width: "85%" }}
                />
                <h5 className="text-center">{ar.heading}</h5>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
