import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="container mx-auto">
      {/* nav-section */}
      <div className="mt-8">
        <h1 className="text-red-500 text-4xl uppercase font-bold">Server</h1>
        <div className="mb-3 flex justify-between">
          <span className="text-gray-500 text-lg">User's Info</span>

          <div className="mr-12">
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
              to="/update"
            >
              Update
            </NavLink>
            &nbsp; <span className="text-gray-500 text-lg">/</span> &nbsp;
            <NavLink
              activeClassName="navs-active"
              className="text-gray-500 text-lg navs me-5"
              to="/another"
            >
              Another
            </NavLink>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Header;
