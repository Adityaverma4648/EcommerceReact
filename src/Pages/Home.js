import React, { useEffect } from "react";
import Welcome from "../components/Welcome";
import Category from "../components/Category";
import axios from "axios";

const Home = () => {

  const fetchData = async()=>{
    const { data } = await axios.get("https://mernecommerce-96kv.onrender.com/");
    console.log(JSON.stringify(data));
  }
  useEffect(()=>{
    fetchData();
  },[])


  return (
    <div className="CompContainer">

       {/* welcomeContainer */}
        <Welcome />

       {/*  category Container */}
        <Category />
    </div>
  );
};

export default Home;
