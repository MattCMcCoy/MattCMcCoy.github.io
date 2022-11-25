import React, { Component, useState } from 'react';
import { Collapse, Nav, Navbar, NavItem, NavLink, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useCycle } from 'framer-motion';
import { ReactComponent as HamburgerClose } from '../images/list.svg';
import { ReactComponent as HamburgerOpen } from '../images/dash-lg.svg';
import { ControlTheme, useSharedTheme } from './component-parts/PageTheme';
import { ReactComponent as GitHubLogo } from '../images/github.svg';
import { ReactComponent as LinkedInLogo } from '../images/linkedin.svg';
import { ReactComponent as Home } from '../images/house.svg';
import '../style/NavMenu.css';

function NavigationBar() {
  const [collapsed, toggleCollapse] = useState(false);
  const [hamburgerColor, switchColor] = useCycle('black', 'white');

  const links = [
    { href: '/', text: 'Home', className: 'nav-links' },
    { href: '#/about', text: 'About Me', className: 'nav-links' },
    { href: '#/projects', text: 'Projects', className: 'nav-links' },
    { href: '#/resume', text: 'Resume', className: 'nav-links' },
  ];

  const { checkedState } = useSharedTheme();

  const handleClick = () => {
    toggleCollapse(!collapsed);
  };

  const handleBlur = (e) => {
    if (e.target !== NavMenu) toggleCollapse(false);
  };

  return (
    <div>
      <Navbar
        className={
          checkedState
            ? 'absolute bg-slate-700 top-0 z-10 w-[100vw]'
            : 'header-light'
        }
      >
        <div>
          <Button
            onClick={handleClick}
            className='svg-button'
            onMouseOver={switchColor}
            onMouseOut={switchColor}
            color={hamburgerColor}
          >
            {collapsed ? (
              <HamburgerOpen
                style={{ height: 30, width: 20 }}
                className='svg-button'
                color='white'
              />
            ) : (
              <HamburgerClose
                style={{ height: 30, width: 20 }}
                className='svg-button'
                color='white'
              />
            )}
          </Button>
          <Button className='svg-button' href='/'>
            <Home style={{ height: 30, width: 20 }} />
          </Button>
          <Button
            className='svg-button'
            href='https://github.com/MattCMcCoy'
            target='_blank'
          >
            <GitHubLogo style={{ height: 30, width: 20 }} />
          </Button>
          <Button
            className='svg-button'
            href='https://linkedin.com/in/matthewcmccoy'
            target='_blank'
          >
            <LinkedInLogo style={{ height: 30, width: 20 }} />
          </Button>
          <ControlTheme />
        </div>
        <Collapse isOpen={collapsed} navbar>
          <Nav fill navbar className='navmenu'>
            {links.map((link) => (
              <NavItem>
                <NavLink
                  as={Link}
                  href={link.href}
                  className={checkedState ? 'nav-links-dark' : 'nav-links'}
                  onClick={handleBlur}
                >
                  {link.text}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export class NavMenu extends Component {
  render() {
    return <NavigationBar />;
  }
}
