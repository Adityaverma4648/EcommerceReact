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
    <div className="w-full h-screen bg-gradient-to-t from-red-400 to-blue-400 flex flex-col justify-start items-center">

       {/* welcomeContainer */}
        <Welcome />

        {/*  category */}
        <Category />


    </div>
  );
};

export default Home;
