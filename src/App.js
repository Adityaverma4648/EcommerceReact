import React, { Component } from "react";
import "../src/App.css";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Header from "./components/Header.js";
import Sidebar from "./components/Sidebar.js";
import Explore from "./components/Explore.js";
import Home from "./components/Home";
import AllProducts from "./components/AllProducts";
import Saved from "./components/Saved"; 
import OrderNdelivery from "./components/OrderNdelivery";
import AfterSales from "./components/AfterSales";
import Feedback from "./components/Feedback";
import Settings from "./components/Settings";
import Cart from "./components/Cart";

const App = () => {
  const handleSearch = () => {};
  return (
    <>
      <BrowserRouter>
        <Header search={handleSearch} />
        <div className="d-flex">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/explore" element={<Explore />}></Route>
            <Route path="/products" element={<AllProducts />}></Route>
            <Route path="/saved" element={<Saved />}></Route>
            <Route path="/orderNdelivery" element={<OrderNdelivery />}></Route>
            <Route path="/afterSales" element={<AfterSales />}></Route>
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
