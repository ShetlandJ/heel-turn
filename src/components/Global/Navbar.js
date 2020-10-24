import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
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
              `lg:flex flex-grow items-center${
                navbarOpen ? ' flex' : ' hidden'}`
            }
          >
            <ul className="flex text-white flex-col lg:flex-row list-none lg:ml-auto">
              <NavLink
                activeClassName="active"
                to="/"
                isActive={(match, location) => location.pathname === '/'}

              >
                Home
              </NavLink>
              <NavLink
                activeClassName="active"
                to="/about"
                isActive={(match, location) => location.pathname === '/about'}
              >
                <span className="ml-2">About</span>

              </NavLink>
              <NavLink
                activeClassName="active"
                to="/test"
                isActive={(match, location) => location.pathname === '/test'}
              >
                <span className="ml-2">Test</span>

              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
