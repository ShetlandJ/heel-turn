import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const linkData = [
    { to: '/', text: 'Home' },
    { to: '/about', text: 'About' },
    { to: '/test', text: 'Test' },
  ];

  const links = linkData.map((link) => (
    <NavLink
      activeClassName="active"
      to={link.to}
      isActive={(match, location) => location.pathname === link.to}
      className="mb-2 lg:mb-0"
    >
      <span className="lg:ml-2">
        {link.text}
      </span>
    </NavLink>
  ));

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-black mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">

            <h3 className="text-white">
              The Heel Book
            </h3>

            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          <div
            className={
              `lg:flex flex-grow ${
                navbarOpen ? ' flex' : ' hidden'}`
            }
          >
            <div className="flex w-full text-white flex-col lg:flex-row list-none lg:ml-auto lg:justify-end">
              {/* <NavLink
                activeClassName="active"
                to="/"
                isActive={(match, location) => location.pathname === '/'}
                className="mb-2 lg:mb-0"

              >
                Home
              </NavLink>
              <NavLink
                activeClassName="active"
                to="/about"
                isActive={(match, location) => location.pathname === '/about'}
                className="mb-2 lg:mb-0"
              >
                <span className="lg:ml-2">About</span>

              </NavLink>
              <NavLink
                activeClassName="active"
                to="/test"
                isActive={(match, location) => location.pathname === '/test'}
                className="mb-2 lg:mb-0"
              >
                <span className="lg:ml-2">Test</span>

              </NavLink> */}
              {links}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
