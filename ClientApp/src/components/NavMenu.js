import React, { Component, useState, useEffect } from "react";
import ReactSwitch from "react-switch";
import {
  Collapse,
  Container,
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
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudMoon } from "@fortawesome/free-solid-svg-icons";

const createNavItem = ({ href, text }) => (
  <NavItem>
    <NavLink href={href} className="nav-links">
      {text}
    </NavLink>
  </NavItem>
);

function ControlTheme() {
  const storedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(storedTheme ?? "light");
  const [checkedState, setState] = useState(theme === "light");

  const toggleStates = () => {
    setState(!checkedState);
    if (theme === "light") {
      setTheme("dark");
      return;
    }
    setTheme("light");
  };

  useEffect(() => {
    // Keeps state of theme on page refresh :)
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  });

  return (
    <ReactSwitch
      onChange={toggleStates}
      checked={checkedState}
      uncheckedIcon={<FontAwesomeIcon icon={faMoon} color="white" transform={"shrink right-3"}/>}
      checkedIcon={<FontAwesomeIcon icon={faCloudMoon} transform={"shrink right-3"}/>}
      height={25}
      width={50}
    />
  );
}

function NavigationBar() {
  const [collapsed, toggleCollapse] = useCycle(false, true);

  const links = [
    { href: "/", text: "Home" },
    { href: "/AboutMe", text: "About Me" },
  ];

  return (
    <header>
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
    </header>
  );
}
export class NavMenu extends Component {
  render() {
    return <NavigationBar />;
  }
}
