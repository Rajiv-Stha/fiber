import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../images/logo@1300x.png";
import "../css/NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleNavLinkClick = () => {
    setExpanded(false);
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(scrollPosition > currentScrollPos || currentScrollPos < 10);
    setScrollPosition(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <>
      <div className={`bg-nav ${visible ? "visible" : "hidden"}`}>
        <Navbar
          expanded={expanded}
          expand="md"
          className="container py-3 pb-3 sticky-top"
        >
          <Container fluid="md">
            <Navbar.Brand>
              <NavLink to="/">
                {" "}
                <img className="logo" src={logo} alt="logo" />
              </NavLink>
            </Navbar.Brand>
            <div className="contactbtn d-flex justify-content-end gap-2">
              <NavLink
                to="/contact"
                style={{ fontSize: "17px" }}
                className="btn contact2"
              >
                Contact Us
              </NavLink>
              <Navbar.Toggle
                aria-controls="offcanvasNavbar"
                onClick={() => setExpanded(expanded ? false : "expanded")}
              />
            </div>
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <Offcanvas.Header closeButton onClick={handleNavLinkClick} />
              <Offcanvas.Body>
                <Nav className="justify-content-end align-items-center flex-grow-1 pe-3 gap-2 width">
                  <NavLink
                    to="/"
                    onClick={handleNavLinkClick}
                    style={{ fontSize: "17px" }}
                    className={(e) => {
                      return e.isActive
                        ? "aqua paddingg  nav-link"
                        : "nav-link paddingg hover active";
                    }}
                  >
                    Home
                  </NavLink>

                  <NavLink
                    to="/about"
                    onClick={handleNavLinkClick}
                    style={{ fontSize: "17px" }}
                    className={(e) => {
                      return e.isActive
                        ? "aqua paddingg  nav-link"
                        : "nav-link paddingg hover active";
                    }}
                  >
                    About Us
                  </NavLink>

                  <NavLink
                    to="/products"
                    onClick={handleNavLinkClick}
                    style={{ fontSize: "17px" }}
                    className={(e) => {
                      return e.isActive
                        ? "aqua paddingg  nav-link"
                        : "nav-link paddingg hover active";
                    }}
                  >
                    Products
                  </NavLink>

                  <NavLink
                    to="/blogs"
                    onClick={handleNavLinkClick}
                    style={{ fontSize: "17px" }}
                    className={(e) => {
                      return e.isActive
                        ? "aqua paddingg  nav-link"
                        : "nav-link paddingg hover active";
                    }}
                  >
                    Blogs
                  </NavLink>

                  <NavLink
                    to="/contact"
                    onClick={handleNavLinkClick}
                    style={{ fontSize: "17px" }}
                    className={(e) => {
                      return e.isActive
                        ? "aqua margin-left btn contact"
                        : "margin-left btn contact";
                    }}
                  >
                    Contact Us
                  </NavLink>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default NavBar;
