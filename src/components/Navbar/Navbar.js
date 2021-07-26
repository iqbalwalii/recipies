import React from "react";
import "./Navbar.css";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";

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
            <Nav className="m-auto">
              <Nav.Link href="#features">Recipies</Nav.Link>
              <Nav.Link href="#pricing">About us</Nav.Link>{" "}
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search Recipies"
                  className="mr-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Nav>

            <Nav>
              <Button variant="success" className="NavBtns">
                <Nav href="#deets">Signup</Nav>
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
