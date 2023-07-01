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

const App = () => {
  
  const [user,setUser] = useState();  
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  const handleSearch = (value) => {
    setSearch(value);
  };
  return (
    <>
      <BrowserRouter>
          <Header handleSearch={handleSearch} />
        <div className="flex h-screen w-screen">
          {/* <Sidebar /> */}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/deals" element={<Deals />}></Route>
             <Route path="/signUp" element={<SignUp />}></Route>
             <Route path="/login" element={<Login />} ></Route>
            <Route path="/products" element={<AllProducts search={search} />}></Route>
            <Route path="/saved" element={<Saved />}></Route>
            <Route path="/orderNdelivery" element={<OrderNdelivery />}></Route>
            <Route path="/delivery" element={<Delivery />}></Route>
            <Route path="/feedback" element={<Feedback />}></Route>
            <Route path="/settings" element={<Settings />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
