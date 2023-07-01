import React, { useEffect } from "react";
import Welcome from "../components/Welcome";
import axios from "axios";
import Category from "../components/Category";


const Home = () => {

  const fetchData = async()=>{
    const { data } = await axios.get("https://mernecommerce-96kv.onrender.com/");
  }
  useEffect(()=>{
    fetchData();
  },[])


  return (
    <div className="w-full h-auto bg-white flex flex-col justify-start items-center overflow-y-visible">

       {/* welcomeContainer */}
        <Welcome />

        {/*  category */}
        <Category />


    </div>
  );
};

export default Home;
