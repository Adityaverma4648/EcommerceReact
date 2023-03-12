import React, { useState } from "react";
import "../src/App.css";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Header from "./components/Header.js";
import Sidebar from "./components/Sidebar.js";
import Explore from "./Pages/Explore.js";
import Home from "./Pages/Home";
import AllProducts from "./Pages/AllProducts";
import Saved from "./Pages/Saved"; 
import OrderNdelivery from "./Pages/OrderNdelivery";
import AfterSales from "./Pages/AfterSales";
import Feedback from "./Pages/Feedback";
import Settings from "./Pages/Settings";
import Cart from "./Pages/Cart";
import SignUp from "./Pages/SignUp";
import SingleCategory from "./components/SingleCategory"


const App = () => {
  
  const [user,setUser] = useState();  
  const handleSearch = () => {return null;};

  return (
    <>
      <BrowserRouter>
        <Header search={handleSearch} />
        <div className="d-flex">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/explore" element={<Explore />}></Route>
             <Route path="/signUp" element={<SignUp />}></Route>
             <Route path="/category?id" element={<SingleCategory />}></Route>
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
