import { ControlTheme, useSharedTheme } from "./component-parts/PageTheme.js";
import React, { Component } from "react";
import { Collapse, Nav, Navbar, NavItem, NavLink, Button } from "reactstrap";
import { useCycle } from "framer-motion";
import "./NavMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMinus } from "@fortawesome/fontawesome-free-solid";


const createNavItem = ({ href, text, className }) => (
  <NavItem>
    <NavLink href={href} className={className}>
      {text}
    </NavLink>
  </NavItem>
);

// Should probably how to figure out how to make this look nice in light mode.
const NavigationBar = () => {
  const [collapsed, toggleCollapse] = useCycle(false, true);
  const [hamburgerColor, switchColor] = useCycle("black", "white");

  const links = [
    { href: "/", text: "Home", className: "nav-links" },
    { href: "/aboutme", text: "About Me", className: "nav-links" },
    { href: "/projects", text: "Projects", className: "nav-links" },
    { href: "/resume", text: "Resume", className: "nav-links" },
  ];
  const { checkedState } = useSharedTheme();
  return (
    <Navbar
      className={checkedState ? "header-dark" : "header-light"}
    >
      <Button
        onClick={toggleCollapse}
        className="navbar-toggler"
        onMouseOver={switchColor}
        onMouseOut={switchColor}
      >
        <FontAwesomeIcon icon={collapsed ? faMinus: faBars} color={hamburgerColor} />
      </Button>
      {ControlTheme()}
      <Collapse isOpen={collapsed} navbar>
        <Nav>{links.map(createNavItem)}</Nav>
      </Collapse>
    </Navbar>
  );
};

export class NavMenu extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
      </div>
    );
  }
}
