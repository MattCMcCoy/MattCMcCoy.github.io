import { ControlTheme } from "./component-parts/PageTheme.js";
import React, { Component } from "react";
import { Collapse, Nav, Navbar, NavItem, NavLink, Button } from "reactstrap";
import { useCycle } from "framer-motion";
import "./NavMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/fontawesome-free-solid";

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
  ];

  return (
    <Navbar>
      <Nav navbar>
        {createNavItem({ href: "/", text: "Matt McCoy", className: "title" })}
      </Nav>
      <Button
        onClick={toggleCollapse}
        className="navbar-toggler"
        onMouseOver={switchColor}
        onMouseOut={switchColor}
      >
        <FontAwesomeIcon icon={faBars} color={hamburgerColor} />
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
