import { ControlTheme, useSharedTheme } from "./component-parts/PageTheme";
import React, { Component } from "react";
import { Collapse, Nav, Navbar, NavItem, NavLink, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./styling/NavMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMinus } from "@fortawesome/fontawesome-free-solid";
import { ReactComponent as GitHubLogo } from "./Images/github.svg";
import { ReactComponent as LinkedInLogo } from "./Images/linkedin.svg";
import { useCycle } from "framer-motion";
import { ReactComponent as Home } from "./Images/house.svg";

// Should probably how to figure out how to make this look nice in light mode.
function NavigationBar() {
  const [collapsed, toggleCollapse] = useCycle(false, true);
  const [hamburgerColor, switchColor] = useCycle("black", "white");

  const links = [
    { href: "/", text: "Home", className: "nav-links" },
    { href: "#/aboutme", text: "About Me", className: "nav-links" },
    { href: "#/projects", text: "Projects", className: "nav-links" },
  ];

  const { checkedState } = useSharedTheme();

  return (
    <>
      <Navbar className={checkedState ? "header-dark" : "header-light"}>
        <div>
          <Button
            onClick={toggleCollapse}
            className="svg-button"
            onMouseOver={switchColor}
            onMouseOut={switchColor}
            color={hamburgerColor}
          >
            <FontAwesomeIcon
              icon={collapsed ? faMinus : faBars}
              color={hamburgerColor}
            />
          </Button>
          <Button className="svg-button" href="/">
            <Home style={{ height: 30, width: 20 }} className="svg" />
          </Button>
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
          <Nav fill navbar className="navmenu">
            {links.map((link) => (
              <NavItem>
                <NavLink
                  as={Link}
                  href={link.href}
                  className={checkedState ? "nav-links-dark" : "nav-links"}
                  onClick={toggleCollapse}
                >
                  {link.text}
                </NavLink>
              </NavItem>
            ))}
            <NavItem>
              <ControlTheme />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}

export class NavMenu extends Component {
  render() {
    return <NavigationBar />;
  }
}
