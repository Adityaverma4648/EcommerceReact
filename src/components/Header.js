import React, { useState } from "react";
import {
  FaCamera,
  FaMicrophone,
  FaSearch,
  FaUser,
  FaBell,
  FaSun,
  FaShoppingCart,
} from "react-icons/fa";
import {Link} from "react-router-dom"

const Header = ({ search }) => {
  // const [search,setSearch] = useState("");
  const handleSearch = () => {
    console.log(search);
  };
  return (
    <div className="Header">
      <div className="logoCont">LOGO</div>
      <div className="navbarCont">
        {/* search form */}
        <div className="searchForm d-flex justify-content-center align-items-center">
          <FaSearch className="mx-1" style={{fontSize:"19px"}} />
          <input type="text" name="searchInp" id="searchInp" className="bg-transparent p-2 rounded-5" placeholder="Search" />
            
        </div>

        {/* Search Icons  */}
        <div className="searchOptions">
          <button type="button" className="border-0 rounded-0 bg-transparent">
            <FaCamera />
          </button>
          <button type="button" className="border-0 rounded-0 bg-transparent">
            <FaMicrophone />
          </button>
        </div>

        {/*  user oriented icons */}
        <div className="userOrientedIconOptions d-flex justify-content-center align-items-center">
          <button type="button" className="btn border-0 bg-transparent">
            <FaBell />
          </button>
          <button type="button" className="btn border-0 bg-transparent">
            <FaUser />
          </button>
          <button type="button" className="btn border-0 bg-transparent">
            <FaSun />
          </button>
        </div>

        {/*  cart */}
        <div className="cartContIcon d-flex justify-content-end align-items-center">
          <span
            className="text-danger d-flex justify-content-center align-items-center"
            style={{ fontWeight: "500", fontSize: "18px" }}
          >
            0
          </span>
          <Link to="/cart">
          <button
            type="button"
            className="btn border-0 "
            style={{ fontSize: "25px" }}
          >
            <FaShoppingCart />
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
