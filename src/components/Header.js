import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Header = ({ search }) => {
  // const [search,setSearch] = useState("");
  const handleSearch = () => {
    console.log(search);
  };
  return (
    <div className="Header">
      <div className="logoCont">LOGO</div>
      Hello from header
    </div>
  );
};

export default Header;
