import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Install react-icons for icons
import planet from '../assets/planet.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center space-x-4">
          <img src={planet} alt="planet logo" className="h-10 w-10" />
          <h1 className="text-2xl font-bold tracking-wide">Space Traveler`s Hub</h1>
        </div>

        {/* Hamburger Menu Button (visible on small screens) */}
        <button
          type="submit"
          onClick={toggleMobileMenu}
          className="block lg:hidden text-2xl focus:outline-none"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Menu for large screens */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (
                  isActive
                    ? 'text-blue-500 border-b-2 border-blue-500'
                    : 'hover:text-blue-400'
                  )}
              >
                Rocket
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Missions"
                className={({ isActive }) => (
                  isActive
                    ? 'text-blue-500 border-b-2 border-blue-500'
                    : 'hover:text-blue-400'
                  )}
              >
                Missions
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Dragons"
                className={({ isActive }) => (
                  isActive
                    ? 'text-blue-500 border-b-2 border-blue-500'
                    : 'hover:text-blue-400'
                  )}
              >
                Dragons
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/myProfile"
                className={({ isActive }) => (
                  isActive
                    ? 'text-blue-500 border-b-2 border-blue-500'
                    : 'hover:text-blue-400'
                  )}
              >
                My Profile
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu (visible when hamburger is clicked) */}
      <div
        className={`${
          isMobileMenuOpen ? 'block' : 'hidden'
        } lg:hidden bg-gray-900 py-4`}
      >
        <ul className="flex flex-col items-center space-y-4">
          <li>
            <NavLink
              to="/"
              onClick={toggleMobileMenu} // Close the menu on click
              className={({ isActive }) => (
                isActive
                  ? 'text-blue-500 border-b-2 border-blue-500'
                  : 'hover:text-blue-400'
                )}
            >
              Rocket
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Missions"
              onClick={toggleMobileMenu}
              className={({ isActive }) => (
                isActive
                  ? 'text-blue-500 border-b-2 border-blue-500'
                  : 'hover:text-blue-400'
                )}
            >
              Missions
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Dragons"
              onClick={toggleMobileMenu}
              className={({ isActive }) => (
                isActive
                  ? 'text-blue-500 border-b-2 border-blue-500'
                  : 'hover:text-blue-400'
              )}
            >
              Dragons
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myProfile"
              onClick={toggleMobileMenu}
              className={({ isActive }) => (
                isActive
                  ? 'text-blue-500 border-b-2 border-blue-500' 
                  :'hover:text-blue-400'
              )}
            >
              My Profile
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
