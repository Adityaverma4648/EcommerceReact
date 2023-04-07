import React, { useEffect } from "react";
import Welcome from "../components/Welcome";
import Category from "../components/Category";
import Slider from "../components/Slider";
import axios from "axios";

const Home = () => {

  const fetchData = async()=>{
    const { data } = await axios.get("http://localhost:7000/");
    console.log(JSON.stringify(data));
  }
  useEffect(()=>{
    fetchData();
  },[])


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
