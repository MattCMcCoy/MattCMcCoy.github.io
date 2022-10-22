import { ControlTheme, useSharedTheme } from "./component-parts/PageTheme.js";
import React, { Component } from "react";
import { Collapse, Nav, Navbar, NavItem, NavLink, Button } from "reactstrap";
import { useCycle } from "framer-motion";
import "./Styling/NavMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMinus } from "@fortawesome/fontawesome-free-solid";
import { ReactComponent as GitHubLogo } from "./Images/github.svg";
import { ReactComponent as LinkedInLogo } from "./Images/linkedin.svg";
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
    <Navbar className={checkedState ? "header-dark" : "header-light"}>
      <div>
        <Button
          onClick={toggleCollapse}
          className="navbar-toggler"
          onMouseOver={switchColor}
          onMouseOut={switchColor}
        >
          <FontAwesomeIcon
            icon={collapsed ? faMinus : faBars}
            color={hamburgerColor}
          />
        </Button>
        {ControlTheme()}
        <Button
          className="svg-button"
          href="https://github.com/MattCMcCoy"
          target="_blank"
        >
          <GitHubLogo style={{ height: 30, width: 20 }} className="svg" />
        </Button>
        <Button
          className="svg-button"
          href="https://linkedin.com/in/matthewcmccoy"
          target="_blank"
        >
          <LinkedInLogo style={{ height: 30, width: 20 }} className="svg" />
        </Button>
      </div>
      <Collapse isOpen={collapsed} navbar>
        <Nav navbar>{links.map(createNavItem)}</Nav>
      </Collapse>
    </Navbar>
  );
};

export class NavMenu extends Component {
  render() {
    return <NavigationBar />;
  }
}
