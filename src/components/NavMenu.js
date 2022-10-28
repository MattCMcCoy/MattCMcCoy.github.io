import { ControlTheme, useSharedTheme } from "./component-parts/PageTheme.js";
import React, { Component } from "react";
import { Collapse, Nav, Navbar, NavItem, NavLink, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { useCycle } from "framer-motion";
import { AboutMeHref } from "./AboutMe.js";
import { ResumeHref } from "./Resume.js";
import { ProjectsHref } from "./Projects.js";
import { HomeHref } from "./Home.js";
import "./Styling/NavMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMinus } from "@fortawesome/fontawesome-free-solid";
import { ReactComponent as GitHubLogo } from "./Images/github.svg";
import { ReactComponent as LinkedInLogo } from "./Images/linkedin.svg";

// Should probably how to figure out how to make this look nice in light mode.
function NavigationBar() {
  const [collapsed, toggleCollapse] = useCycle(false, true);
  const [hamburgerColor, switchColor] = useCycle("black", "white");

  const links = [
    { href: HomeHref, text: "Home", className: "nav-links" },
    { href: AboutMeHref, text: "About Me", className: "nav-links" },
    { href: ProjectsHref, text: "Projects", className: "nav-links" },
    { href: ResumeHref, text: "Resume", className: "nav-links" },
  ];
  const { checkedState } = useSharedTheme();
  return (
    <Navbar
      className={checkedState ? "header-dark" : "header-light"}
      onBlur={collapsed ? toggleCollapse : null}
    >
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
        <Nav fill navbar>
          {links.map((link) => (
            <NavItem>
              <NavLink
                as={Link}
                href={link.href}
                t
                className={checkedState ? "nav-links-dark" : "nav-links"}
                onClick={toggleCollapse}
                onFocus={!collapsed ? toggleCollapse : null}
              >
                {link.text}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export class NavMenu extends Component {
  render() {
    return <NavigationBar />;
  }
}
