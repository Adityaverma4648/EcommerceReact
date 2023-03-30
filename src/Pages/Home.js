import React from "react";
import { useState } from "react";

import { Link } from "react-router-dom";
// import Tour from "../svg/Tour.svg";
import clothing from "../svg/clothing.svg";
import desktop from "../svg/desktop.svg";
import sport from "../svg/sport.svg";
import sneaker from "../svg/sneaker.svg";
import watch from "../svg/watch.svg";
import Welcome from "../components/Welcome";

import {
  FaShoppingBag,
} from "react-icons/fa";
import SingleCategory from "../components/SingleCategory";
import Slider from "../components/Slider";

const Home = () => {
  
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
      heading: "Sports",
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

  return (
    <div className="CompContainer">

       {/* welcomeContainer */}
       <Welcome />

      {/*  sliderCont */}
      <Slider />

  {/*  category Container */}
      <div className="w-screen bg-white flex flex-col justify-center items-center z-50">
        <div className="w-8/12 ms-4 flex justify-center items-center py-4 h3 catHeading">
            <FaShoppingBag className="me-2 shakeIcons" />
            Categories
        </div>
        <div
          className= "w-full md:w-3/4 py-4 flex flex-wrap justify-center items-center bg-white"
        >
          {Categories.map((ar) => {
            return (
               <Link key={ar.id} to={SingleCategory} className="border border-secondary w-6/12 md:w-1/5 flex flex-col justify-center items-center">
                    <span className="md:text-xl text-dark text-center">{ar.heading}</span>
                    <img
                       src={ar.src}
                       alt={ar.heading}
                       className="w-10/12 h-10/12 p-4"
                    />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
