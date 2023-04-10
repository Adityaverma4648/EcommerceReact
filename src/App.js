import React, { useState , useEffect} from "react";
import "../src/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import SingleCategory from "./components/SingleCategory";
import Login from "./Pages/Login";

const App = () => {
  
  const [user,setUser] = useState();  
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  const handleSearch = (value) => {
         alert("PRINT VALUE : " , value);
         setSearch(value);
         alert( "PRINT SEARCH : " ,search);
  };


  return (
    <>
      <BrowserRouter>
          <Header handleSearch={handleSearch} />
        <div className="d-flex">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/explore" element={<Explore />}></Route>
             <Route path="/signUp" element={<SignUp />}></Route>
             <Route path="/login" element={<Login />} ></Route>
             <Route path="/category?id" element={<SingleCategory />}></Route>
            <Route path="/products" element={<AllProducts searchKey={search} />}></Route>
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
