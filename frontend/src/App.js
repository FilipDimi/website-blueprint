import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Container,
  Nav,
  Navbar,
  NavbarBrand,
} from "react-bootstrap";

import CustomIconImage from "./components/UI/CustomIconImage";
import CustomLink from "./components/UI/CustomLink";

import AboutPage from "./screens/AboutPage";
import ContactPage from "./screens/ContactPage";
import Homepage from "./screens/Homepage";
import ErrorPage from "./screens/ErrorPage";

import { iconObj } from "./common/companySpecific";
import Footer from "./components/BigContainers/Footer";

function App() {
  const [activePage, setActivePage] = useState("Home");

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
                <CustomLink
                  path="/"
                  title="Home"
                  setActivePage={setActivePage}
                  activePage={activePage}
                >
                  Home
                </CustomLink>
              </Nav.Link>
              <Nav.Link>
                <CustomLink
                  path="/about"
                  title="About"
                  setActivePage={setActivePage}
                  activePage={activePage}
                >
                  About
                </CustomLink>
              </Nav.Link>
              <Nav.Link>
                <CustomLink
                  path="/contact"
                  title="Contact"
                  setActivePage={setActivePage}
                  activePage={activePage}
                >
                  Contact
                </CustomLink>
              </Nav.Link>
            </Nav>
            <CustomIconImage imageLink={iconObj.src} imageAlt={iconObj.alt} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

// Custom link has props to keep active page colored, name the tab, and the path
