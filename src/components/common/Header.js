import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <>
        <nav>
          <NavLink to="/" activestyle={activeStyle} exact="true">
            Home
          </NavLink>
          {" | "}
          <NavLink to="/courses" activestyle={activeStyle}>
            Courses
          </NavLink>
          {" | "}
          <NavLink to="/about" activestyle={activeStyle}>
            About
          </NavLink>
        </nav>
    </>
    
  );
};

export default Header;
