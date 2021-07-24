import React from "react";
import "./Navbar.css";
import { Navbar, Container, Nav } from "react-bootstrap/Navbar";

const Navigation = () => {
  return (
    <div>
      <Nav collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Specialni Recipti</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Nav>
    </div>
  );
};

export default Navigation;
