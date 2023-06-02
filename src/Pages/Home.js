import React, { useEffect } from "react";
import Welcome from "../components/Welcome";
import Category from "../components/Category";
import axios from "axios";
import Slider from "../components/Slider";

const Home = () => {

  const fetchData = async()=>{
    const { data } = await axios.get("https://mernecommerce-96kv.onrender.com/");
  }
  useEffect(()=>{
    fetchData();
  },[])


  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center overflow-scroll ">

       {/* welcomeContainer */}
        <Welcome />

        {/*  Slider */}
        <Slider />
       {/*  category Container */}
        <Category />
    </div>
  );
};

export default Home;
