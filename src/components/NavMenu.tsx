import { useState } from 'react';
import { Collapse, Nav, Navbar, NavItem, NavLink, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { ReactComponent as HamburgerClose } from '../images/hamburger-closed.svg';
import { ReactComponent as HamburgerOpen } from '../images/hamburger-open.svg';
import { ControlTheme, useSharedTheme } from './component-parts/PageTheme';
import { ReactComponent as GitHubLogo } from '../images/github.svg';
import { ReactComponent as LinkedInLogo } from '../images/linkedin.svg';
import { SvgIcon } from '@mui/material';
import clsx from 'clsx';

interface NavigationBarProps {
  links: { href: string; text: string }[];
  navbarIcons: {
    icon: React.FunctionComponent<
      React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
      }
    >;
    href: string;
    target: string | null;
  }[];
}
function NavigationBar({ links, navbarIcons }: NavigationBarProps) {
  const [collapsed, toggleCollapse] = useState(false);
  const { checkedState } = useSharedTheme();

  const handleClick = () => {
    toggleCollapse(!collapsed);
  };

  const handleBlur = (e: any) => {
    // not important it closes right as it blurs, ensure if link is clicked it has time to travel.
    setTimeout(() => toggleCollapse(false), 100);
  };

  return (
    <Navbar
      className={clsx(
        'z-20 w-[100vw] flex flex-row',
        checkedState ? 'bg-slate-700' : 'bg-slate-500'
      )}
      fixed='top'
    >
      <div>
        <Button
          onClick={handleClick}
          className='border-none outline-none bg-transparent group hover:text-black'
          onBlur={handleBlur}
        >
          {collapsed ? (
            <SvgIcon
              component={HamburgerOpen}
              inheritViewBox
              sx={{
                fontSize: 20,
                color: 'white',
                '&:hover': { color: 'black' },
              }}
            />
          ) : (
            <SvgIcon
              component={HamburgerClose}
              inheritViewBox
              sx={{
                fontSize: 20,
                color: 'white',
                '&:hover': { color: 'black' },
              }}
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
      <Collapse isOpen={collapsed} navbar className='z-10'>
        <Nav fill navbar>
          {links.map((link) => (
            <NavItem key={link.href} draggable='false'>
              <NavLink
                as={Link}
                href={link.href}
                className={clsx('text-sm hover:font-bold text-white')}
                draggable='false'
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

export default function NavMenu() {
  const links = [
    { href: '/', text: 'Home' },
    { href: '#/projects', text: 'Projects' },
    { href: '#/resume', text: 'Resume' },
  ];

  const navbarIcons = [
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

  return <NavigationBar links={links} navbarIcons={navbarIcons} />;
}
