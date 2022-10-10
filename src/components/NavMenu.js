import { ControlTheme } from "./component-parts/PageTheme.js";
import React, { Component } from "react";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useCycle } from "framer-motion";
import "./NavMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/fontawesome-free-solid";

const createNavItem = ({ href, text }) => (
  <NavItem>
    <NavLink href={href} className="nav-links">
      {text}
    </NavLink>
  </NavItem>
);

const NavigationBar = () => {
  const [collapsed, toggleCollapse] = useCycle(false, true);

  const links = [
    { href: "/", text: "Home" },
    { href: "/aboutme", text: "About Me" },
    { href: "/projects", text: "Projects" },
  ];

  return (
    <Navbar>
      <NavbarBrand tag={Link} className="nav-links" to="/">
        Matt McCoy
      </NavbarBrand>
      <Button onClick={toggleCollapse} className="navbar-toggler">
      <FontAwesomeIcon icon={faBars} color="white" />
      </Button>
      <Collapse isOpen={collapsed}>
        <Nav navbar>{links.map(createNavItem)}</Nav>
        <ControlTheme />
      </Collapse>
    </Navbar>
  );
};

export class NavMenu extends Component {
  render() {
    return <header>{<NavigationBar />}</header>;
  }
}
