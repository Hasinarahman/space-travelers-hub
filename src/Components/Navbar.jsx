import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-light p-4 flex items-center justify-between">
      <div className="flex items-center">
        <span className="text-dark text-xl font-bold ml-2">Space Travelers Hub</span>
      </div>
      <div>
        <NavLink
          to="/rockets"
          className="text-dark hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
          activeClassName="bg-gray-900"
        >
          Rockets
        </NavLink>
        <NavLink
          to="/missions"
          className="text-dark hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium ml-4"
          activeClassName="bg-gray-900"
        >
          Missions
        </NavLink>
        <NavLink
          to="/profile"
          className="text-dark hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium ml-4"
          activeClassName="bg-gray-900"
        >
          My Profile
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
