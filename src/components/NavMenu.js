import { ControlTheme } from "./component-parts/PageTheme.js";
import React, { Component } from "react";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useCycle } from "framer-motion";
import "./NavMenu.css";

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
      <NavbarBrand tag={Link} className="text-white" to="/">
        Matt McCoy
      </NavbarBrand>
      <NavbarToggler
        onClick={toggleCollapse}
        aria-expanded={false}
        color="white"
      />
      <Collapse isOpen={collapsed}>
        <Nav navbar>{links.map(createNavItem)}</Nav>
        <ControlTheme />
      </Collapse>
    </Navbar>
  );
};
export class NavMenu extends Component {
  render() {
    return (
      <header>
        <NavigationBar />
      </header>
    );
  }
}
