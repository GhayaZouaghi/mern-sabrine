import React from "react";
import "./NavBar.css";
import { Nav, Container, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "../../JS/Actions/user";
import { getPosts } from "../../JS/Actions/post";

const NavBar = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  console.log(isAuth);
  return (
    <Navbar
      className="devnet"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      style={{fontSize:15}}
    >
      <Container>
        <Nav.Link >
          <a className="navbar-brand" href="#1">
            Dev<b>Net</b>
          </a>
        </Nav.Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="responsive-nav">
          <Nav className="me-auto">
            <Link to="/">
              <Nav.Link href="#home">Home</Nav.Link>
            </Link>
            <Link to="/developers">
              <Nav.Link href="#community">Community</Nav.Link>
            </Link>
            <Link to="/news">
              <Nav.Link href="#news" onClick={() => dispatch(getPosts())}>
                News
              </Nav.Link>
            </Link>
          </Nav>
          <Nav>
            {isAuth ? (
              <>
                <Link to="/profile">
                  <Nav.Link href="#myprofile">My profile</Nav.Link>
                </Link>
                <Link to="/login">
                  <Button onClick={() => dispatch(logout())}>Logout</Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/register">
                  <Nav.Link eventKey={2} href="#sign up">
                    Sign Up
                  </Nav.Link>
                </Link>
                <Link to="/login">
                  <Button>Login</Button>
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
