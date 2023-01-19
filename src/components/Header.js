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
    <Container fluid className="bg-success py-2">
      <Row>
        <Col>my One</Col>
      </Row>
    </Container>
  );
};

export default Header;
