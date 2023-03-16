import React from "react";
import {
  FaCompass,
  FaExclamationCircle,
  FaHeart,
  FaPhoneAlt,
  FaCog,
  FaTruckMoving,
  FaHome,
  FaBoxes,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="Sidebar hidden md:flex md:flex-col md:justify-between md:left-0 position-absolute" id="Sidebar">
      <div className="sidebarNavIconsList d-flex flex-column justify-content-evenly align-items-center">
        {/*  Home  */}
        <li
          className="sidebarNavIconsListElem"
          data-bs-toggle="tooltip"
          title="Home"
        >
          <Link to="/" className="d-flex justify-content-center align-items-center py-3 px-3">
            <FaHome className="text-dark" />
          </Link>
        </li>
        {/* <FaCompass /> */}
        <li
          className="sidebarNavIconsListElem"
          data-bs-toggle="tooltip"
          title="Explore"
        >
          <Link to="/explore" className="d-flex justify-content-center align-items-center py-3 px-3">
            <FaCompass className="text-dark" />
          </Link>
        </li>
        {/*  products */}
        <li
          className="sidebarNavIconsListElem"
          data-bs-toggle="tooltip"
          title="Products"
        >
          <Link to="/products" className="d-flex justify-content-center align-items-center py-3 px-3">
            <FaBoxes className="text-dark" />
          </Link>
        </li>
        {/*  Saved */}
        <li
          className="sidebarNavIconsListElem"
          data-bs-toggle="tooltip"
          title="Saved"
        >
          <Link to="/saved" className="d-flex justify-content-center align-items-center py-3 px-3">
            <FaHeart className="text-dark" />
          </Link>
        </li>
        {/*  */}
        <li
          className="sidebarNavIconsListElem"
          data-bs-toggle="tooltip"
          title="OrdersNDelivery"
        >
          <Link to="/orderNdelivery" className="d-flex justify-content-center align-items-center py-3 px-3">
            <FaTruckMoving className="text-dark" />
          </Link>
        </li>
        {/*  Saved */}
        <li
          className="sidebarNavIconsListElem"
          data-bs-toggle="tooltip"
          title="After Sales"
        >
          <Link to="/afterSales" className="d-flex justify-content-center align-items-center py-3 px-3">
            <FaPhoneAlt className="text-dark" />
          </Link>
        </li>
      </div>
      <div className="sidebarNavIconList2 d-flex flex-column justify-content-evenly align-items-center">
        <li
          className="sidebarNavIconsListElem"
          data-bs-toggle="tooltip"
          title="Feedback"
        >
          <Link to="/feedback" className="d-flex justify-content-center align-items-center py-3 px-3">
            <FaExclamationCircle className="text-dark" />
          </Link>
        </li>
        {/*  settings */}
        <li
          className="sidebarNavIconsListElem"
          data-bs-toggle="tooltip"
          title="Settings"
        >
          <Link to="/Settings" className="d-flex justify-content-center align-items-center py-3 px-3">
            <FaCog className="text-dark" />
          </Link>
        </li>
      </div>
    </div>
  );
};

export default Sidebar;
