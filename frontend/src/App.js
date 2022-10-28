import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  Image,
} from "react-bootstrap";

import AboutPage from "./screens/AboutPage";
import ContactPage from "./screens/ContactPage";
import Homepage from "./screens/Homepage";
import ErrorPage from "./screens/ErrorPage";

const CustomIconImage = (props) => {
  return (
    <Image
      src={props.imageLink}
      alt={props.imageAlt}
      style={{ maxWidth: "3rem" }}
      roundedCircle
    />
  );
};

function App() {
  const [activePage, setActivePage] = useState('Home')

  const CustomeLink = (props) => {
    return (
      <Link
        style={{
          color: activePage === props.title ? "#5D001E" : "inherit",
          textDecoration: "inherit",
        }}
        to={props.path}
        onClick={() => {setActivePage(props.title)}}
      >
        {props.title}
      </Link>
    );
  };

  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <NavbarBrand>Nerdroc</NavbarBrand>
          <Navbar.Toggle aria-controls="webblueprint" />
          <Navbar.Collapse id="webblueprint">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "200px" }}
              navbarScroll
            >
              <Nav.Link>
                <CustomeLink path="/" title="Home">
                  Home
                </CustomeLink>
              </Nav.Link>
              <Nav.Link>
                <CustomeLink path="/about" title="About">
                  About
                </CustomeLink>
              </Nav.Link>
              <Nav.Link>
                <CustomeLink path="/contact" title="Contact">
                  Contact
                </CustomeLink>
              </Nav.Link>
            </Nav>
            <CustomIconImage
              imageLink="https://images.pexels.com/photos/8817677/pexels-photo-8817677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              imageAlt="icon"
            />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
