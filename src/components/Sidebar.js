import React from "react";
import {
  FaCompass,
  FaExclamationCircle,
  FaHeart,
  FaPhoneAlt,
  FaSun,
  FaTruckMoving,
  FaHome,
  FaBoxes,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="Sidebar d-flex flex-column d-flex flex-column justify-content-between left-0 position-absolute">
      <div className="sidebarNavIconsList d-flex flex-column justify-content-evenly align-items-center">
        {/*  Home  */}
        <li
          className="sidebarNavIconsListElem"
          data-bs-toggle="tooltip"
          title="Home"
        >
          <Link to="/">
            <FaHome className="text-dark" />
          </Link>
        </li>
        {/* <FaCompass /> */}
        <li
          className="sidebarNavIconsListElem"
          data-bs-toggle="tooltip"
          title="Explore"
        >
          <Link to="/explore">
            <FaCompass className="text-dark" />
          </Link>
        </li>
        {/*  products */}
        <li
          className="sidebarNavIconsListElem"
          data-bs-toggle="tooltip"
          title="Products"
        >
          <Link to="/products">
            <FaBoxes className="text-dark" />
          </Link>
        </li>
        {/*  Saved */}
        <li
          className="sidebarNavIconsListElem"
          data-bs-toggle="tooltip"
          title="Saved"
        >
          <Link to="/saved">
            <FaHeart className="text-dark" />
          </Link>
        </li>
        {/*  */}
        <li
          className="sidebarNavIconsListElem"
          data-bs-toggle="tooltip"
          title="OrdersNDelivery"
        >
          <Link to="/orderNdelivery">
            <FaTruckMoving className="text-dark" />
          </Link>
        </li>
        {/*  Saved */}
        <li
          className="sidebarNavIconsListElem"
          data-bs-toggle="tooltip"
          title="After Sales"
        >
          <Link to="/afterSales">
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
          <Link to="/feedback">
            <FaExclamationCircle className="text-dark" />
          </Link>
        </li>
        {/*  settings */}
        <li
          className="sidebarNavIconsListElem"
          data-bs-toggle="tooltip"
          title="Settings"
        >
          <Link to="/Settings">
            <FaSun className="text-dark" />
          </Link>
        </li>
      </div>
    </div>
  );
};

export default Sidebar;
