import React, { useState , useEffect} from "react";
import "../src/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// components 

import Header from "./components/Header.js";
import Sidebar from "./components/Sidebar.js";

// pages

import Deals from "./Pages/Deals.js";
import Home from "./Pages/Home";
import AllProducts from "./Pages/AllProducts";
import Saved from "./Pages/Saved"; 
import OrderNdelivery from "./Pages/OrderNdelivery";
import Delivery from "./Pages/Delivery";
import Feedback from "./Pages/Feedback";
import Settings from "./Pages/Settings";
import Cart from "./Pages/Cart";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";


//  cookies

import {useCookies} from "react-cookie";


const App = () => {

  // cookies

  const [user, setUser] = useCookies("userData")   // cookie
  const [userData, setUserData] = useState("");    
  const [search, setSearch] = useState("");
  const [isAdmin, setIsAdmin] = useState(true);


  const handleSearch = (value) => {
    setSearch(value);
  };


  //  useEffect(()=>{
  //     if(!user){
  //       setUserData("");
  //       isAdmin(false);
  //     }else{
  //       setUserData(user);
  //       // (userData.userData[0].email === "bhaiyaji3124@gmail.com")?setIsAdmin(true):setIsAdmin(false)
  //      }
  //     }
  //  ,[user,userData, isAdmin])
  return (
    <>
      <BrowserRouter>
          <Header handleSearch={handleSearch} isAdmin={isAdmin} />
        <div className="flex h-screen w-screen">
          {/* <Sidebar /> */}
          <Routes>
            <Route path="/" element={<Home userData={userData} isAdmin={isAdmin} />}></Route>
            <Route path="/deals" element={<Deals userData={userData} isAdmin={isAdmin} />}></Route>
             <Route path="/signUp" element={<SignUp userData={userData} isAdmin={isAdmin} />}></Route>
             <Route path="/login" element={<Login userData={userData} isAdmin={isAdmin} />} ></Route>
            <Route path="/products" element={<AllProducts userData={userData} isAdmin={isAdmin} search={search} />}></Route>
            <Route path="/saved" element={<Saved userData={userData} isAdmin={isAdmin} />}></Route>
            <Route path="/orderNdelivery" element={<OrderNdelivery userData={userData} isAdmin={isAdmin} />}></Route>
            <Route path="/delivery" element={<Delivery userData={userData} isAdmin={isAdmin} />}></Route>
            <Route path="/feedback" element={<Feedback userData={userData} isAdmin={isAdmin} />}></Route>
            <Route path="/settings" element={<Settings userData={userData} isAdmin={isAdmin} />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
