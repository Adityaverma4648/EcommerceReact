import React from "react";
import { FaCompass, FaExclamationCircle, FaHeart, FaSun } from "react-icons/fa";
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
        <li className="sidebarNavIconsListElem">
          <FaHome />
        </li>
        {/* <FaCompass /> */}
        <li className="sidebarNavIconsListElem">
          <FaCompass />
        </li>
        {/*  products */}
        <li className="sidebarNavIconsListElem">
          <FaBoxes />
        </li>
        {/*  Saved */}
        <li className="sidebarNavIconsListElem">
          <FaHeart />
        </li>
        {/*  */}
        <li className="sidebarNavIconsListElem">
          <FaBoxes />
        </li>
        {/*  Saved */}
        <li className="sidebarNavIconsListElem">
          <FaHeart />
        </li>
      </div>
      <div className="sidebarNavIconList2 d-flex flex-column justify-content-evenly align-items-center">
        <li className="sidebarNavIconsListElem">
          <FaExclamationCircle />
        </li>
        {/*  settings */}
        <li className="sidebarNavIconsListElem">
          <FaSun />
        </li>
      </div>
    </div>
  );
};

export default Sidebar;
