import { useState } from 'react';
import { Collapse, Nav, Navbar, NavItem, NavLink, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useCycle } from 'framer-motion';
import { ReactComponent as HamburgerClose } from '../images/list.svg';
import { ReactComponent as HamburgerOpen } from '../images/dash-lg.svg';
import { ControlTheme, useSharedTheme } from './component-parts/PageTheme';
import { ReactComponent as GitHubLogo } from '../images/github.svg';
import { ReactComponent as LinkedInLogo } from '../images/linkedin.svg';
import { ReactComponent as Home } from '../images/house.svg';
import { SvgIcon } from '@mui/material';
import clsx from 'clsx';
import '../style/Page-Theme.css';

function NavigationBar() {
  const [collapsed, toggleCollapse] = useState(false);
  const [hamburgerColor, switchColor] = useCycle('black', 'white');

  const links = [
    { href: '/', text: 'Home' },
    { href: '#/about', text: 'About Me' },
    { href: '#/projects', text: 'Projects' },
    { href: '#/resume', text: 'Resume' },
  ];

  const navbarIcons = [
    { icon: Home, href: '/', target: null },
    {
      icon: GitHubLogo,
      href: 'https://github.com/MattCMcCoy',
      target: '_blank',
    },
    {
      icon: LinkedInLogo,
      href: 'https://linkedin.com/in/matthewcmccoy',
      target: '_blank',
    },
  ];

  const { checkedState } = useSharedTheme();

  const handleClick = () => {
    toggleCollapse(!collapsed);
  };

  const handleBlur = (e: any) => {
    if (e.target !== NavMenu) toggleCollapse(false);
  };

  return (
    <div>
      <Navbar
        className={clsx(
          'absolute top-0 z-10 w-[100vw]',
          checkedState ? 'bg-slate-700' : 'bg-slate-500'
        )}
      >
        <div>
          <Button
            onClick={handleClick}
            className='border-none outline-none bg-transparent hover:text-black lg:hidden visible'
            onMouseOver={() => switchColor}
            onMouseOut={() => switchColor}
            color={hamburgerColor}
          >
            {collapsed ? (
              <HamburgerOpen
                style={{ height: 30, width: 20 }}
                className='border-none outline-none bg-transparent hover:text-black'
                color='white'
              />
            ) : (
              <HamburgerClose
                style={{ height: 30, width: 20 }}
                className='border-none outline-none bg-transparent hover:text-black'
                color='white'
              />
            )}
          </Button>
          {navbarIcons.map((navbarIcon) => (
            <Button
              href={navbarIcon.href}
              className='border-none outline-none bg-transparent hover:fill-white'
              target={navbarIcon.target}
              key={navbarIcon.href}
            >
              <SvgIcon
                component={navbarIcon.icon}
                inheritViewBox
                sx={{
                  fontSize: 20,
                  color: 'white',
                  '&:hover': { color: 'black' },
                }}
              />
            </Button>
          ))}
          <ControlTheme />
        </div>
        <Nav fill navbar className='grid-cols-4 space-x-2 lg:grid hidden mr-5'>
          {links.map((link) => (
            <NavItem key={link.href}>
              <NavLink
                as={Link}
                href={link.href}
                className={clsx(
                  'text-sm hover:underline',
                  checkedState ? 'text-white' : 'text-black'
                )}
                onClick={handleBlur}
              >
                {link.text}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
        <Collapse isOpen={collapsed} navbar className='lg:hidden block'>
          <Nav fill navbar>
            {links.map((link) => (
              <NavItem key={link.href}>
                <NavLink
                  as={Link}
                  href={link.href}
                  className={clsx(
                    'text-sm hover:font-bold',
                    checkedState ? 'text-white ' : 'text-black'
                  )}
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

export default function NavMenu() {
  return <NavigationBar />;
}
