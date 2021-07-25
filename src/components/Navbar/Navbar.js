import React from "react";
import "./Navbar.css";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

const Navigation = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home" className="home">
            <span style={{ color: "#016329" }}>Speaciální </span> Recepty
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Recipies</Nav.Link>
              <Nav.Link href="#pricing">About us</Nav.Link>
            </Nav>
            <Nav>
              <Button variant="success" className="NavBtns">
                <Nav href="#deets">Signin</Nav>
              </Button>
              <Button variant="outline-success" className="NavBtns">
                <Nav href="#deets">Signin</Nav>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
