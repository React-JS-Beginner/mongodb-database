import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="container mx-auto">
      {/* nav-section */}
      <div className="mt-8">
        <h1 className="text-red-500 text-4xl uppercase font-bold">Ideal</h1>
        <div className="mb-3 flex justify-between">
          <span className="text-gray-500 text-lg">Contact Editor</span>

          <div>
            <NavLink
              activeClassName="navs-active"
              className="text-gray-500 text-lg navs me-5"
              to="/main"
            >
              Contacts
            </NavLink>
            &nbsp; <span className="text-gray-500 text-lg">/</span> &nbsp;
            <NavLink
              activeClassName="navs-active"
              className="text-gray-500 text-lg navs me-5"
              to="/edit"
            >
              Edit
            </NavLink>
            &nbsp; <span className="text-gray-500 text-lg">/</span> &nbsp;
            <NavLink
              activeClassName="navs-active"
              className="text-gray-500 text-lg navs me-5"
              to="/update"
            >
              Update
            </NavLink>
          </div>
          
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Header;
