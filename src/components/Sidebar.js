import React from "react";
import {
  FaCompass,
  FaExclamationCircle,
  FaHeart,
  FaPhoneAlt,
  FaSun,
  FaTruckMoving,
} from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaBoxes } from "react-icons/fa";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
          <FaHome />
        </li>
        {/* <FaCompass /> */}
        <li
          className="sidebarNavIconsListElem"
          data-bs-toggle="tooltip"
          title="Explore"
        >
          <FaCompass />
        </li>
        {/*  products */}
        <li
          className="sidebarNavIconsListElem"
          data-bs-toggle="tooltip"
          title="Products"
        >
          <FaBoxes />
        </li>
        {/*  Saved */}
        <li
          className="sidebarNavIconsListElem"
          data-bs-toggle="tooltip"
          title="Saved"
        >
          <FaHeart />
        </li>
        {/*  */}
        <li
          className="sidebarNavIconsListElem"
          data-bs-toggle="tooltip"
          title="OrdersNDelivery"
        >
          <FaTruckMoving />
        </li>
        {/*  Saved */}
        <li
          className="sidebarNavIconsListElem"
          data-bs-toggle="tooltip"
          title="After Sales"
        >
          <FaPhoneAlt />
        </li>
      </div>
      <div className="sidebarNavIconList2 d-flex flex-column justify-content-evenly align-items-center">
        <li
          className="sidebarNavIconsListElem"
          data-bs-toggle="tooltip"
          title="Feedback"
        >
          <FaExclamationCircle />
        </li>
        {/*  settings */}
        <li
          className="sidebarNavIconsListElem"
          data-bs-toggle="tooltip"
          title="Settings"
        >
          <FaSun />
        </li>
      </div>
    </div>
  );
};

export default Sidebar;
