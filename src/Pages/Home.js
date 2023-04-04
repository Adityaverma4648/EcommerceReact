import React from "react";
import Welcome from "../components/Welcome";
import Category from "../components/Category";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div className="CompContainer">

       {/* welcomeContainer */}
        <Welcome />

       {/*  sliderCont */}
        <Slider />

       {/*  category Container */}
        <Category />
    </div>
  );
};

export default Home;
