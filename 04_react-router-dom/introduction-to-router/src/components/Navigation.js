import React from "react";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <div className="nav">
      <ul>
        <li className="nav-elements">
            {/* The NavLink use to know which route is currently active.
                And in the NavLink className a callback have to pass where an object pass by the
                react, where by checking the name of the property isActive we know the link is active or not.
            */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-links ${isActive ? "nav-links__active" : undefined}`
            }

            // NavLink checks the route is started with given url or not,
            // But the default url is always started with  / and /products also started with /
            // So to prevent the clash we use end to define that this url is end here.
            end
          >
            Home
          </NavLink>
        </li>
        <li className="nav-elements">
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `nav-links ${isActive ? "nav-links__active" : undefined}`
            }
          >
            Products
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
