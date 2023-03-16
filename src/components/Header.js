import React, { useState } from "react";
import { useStateValue } from "../redux/StateProvider";
import {
  FaCamera,
  FaMicrophone,
  FaSearch,
  FaUser,
  FaBell,
  FaCog,
  FaShoppingCart,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    console.log(search);
  };
  return (
    <div className="Header" >
      <div className="w-20 flex items-center justify-center border-r border-gray-400 font-semibold">
          <Link to="/" className="text-black text-decoration-none" >LOGO</Link>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <div className="h-full w-1/2 px-2 d-flex justify-start items-center ">
          {/* search form */}
          <div className="w-4/4 md:w-2/4  h-full flex justify-end items-center text-primary">
            <FaSearch className="mx-2" style={{ fontSize: "23px" }} />
            <input
              type="text"
              name="searchInp"
              id="searchInp"
              className="w-3/4 bg-transparent p-2 rounded-3xl  text-gray-900 border border-secondary border-opacity-50"
              placeholder="Search"
            />
          </div>

          {/* Search Icons  */}
          <div className="w-2/4 md:w-1/4 h-full flex justify-center items-center">
            <button
              type="button"
              className="mx-2 border-0 rounded-0 bg-transparent text-primary"
            >
              <FaCamera style={{fontSize:"19px"}}/>
            </button>
            <button
              type="button"
              className="mx-2 border-0 rounded-0 bg-transparent text-primary"
            >
              <FaMicrophone style={{fontSize:"19px"}}/>
            </button>
          </div>
        </div>
        <div className="w-1/2 h-full flex justify-end items-center px-4 " >
            {/*  user oriented icons */}
        <div className="w-3/4 mx-3 hidden md:flex md:justify-end md:items-center">
          <button type="button" className="btn border-0 bg-transparent">
            <FaBell style={{fontSize:"19px"}} />
          </button>
          <button type="button" className="btn border-0 bg-transparent">
            <FaUser style={{fontSize:"19px"}} />
          </button>
          <button type="button" className="btn border-0 bg-transparent">
            <FaCog style={{fontSize:"19px"}} />
          </button>
        </div>

        {/*  cart */}
        <div className="d-flex justify-content-end align-items-center">
          <span
            style={{ fontWeight: "500", fontSize: "18px" }}
          >
            {basket?.length}
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
    </div>
  );
};

export default Header;
