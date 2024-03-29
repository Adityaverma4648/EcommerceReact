import React, { useEffect } from "react";
import Welcome from "../components/Welcome";
import axios from "axios";
import Category from "../components/Category";
import Slider from "../components/Slider";


const Home = ({isAdmin , token , userData}) => {

  // const fetchData = async()=>{
  //   const { data } = await axios.get("https://mernecommerce-96kv.onrender.com/");
  // }
  // useEffect(()=>{
  //   fetchData();
  // },[])


  return (
     <main className="h-auto overflow-scroll" id="Home">
        {/*  welcome.........*/}
        <Welcome />

        {/*  category........*/}
        <Category isAdmin={isAdmin} />

         {/*  slider.........*/}
        <Slider />

        <footer className="h-1/2 flex justify-center items-center" >
          Footer
        </footer>
        

    </main>
  );
};

export default Home;
