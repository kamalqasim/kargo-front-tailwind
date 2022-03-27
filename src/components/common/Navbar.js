import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <>
       <div className="md:container h-14  flex items-center justify-between" >
          <div className="w-auto  flex items-center">
            <a href="#" className="">
              <h4 className="text-maincolor font-bold">Kargoo</h4>
            </a>
           
          </div>
          
          <nav className="flex items-center text-gray-900">
            <NavLink to="/" activeStyle={activeStyle} exact className="mr-2  ">
              Haqqında
            </NavLink>
            <NavLink to="/" activeStyle={activeStyle} exact className="mr-2  ">
              Xidmətlər
            </NavLink>
            <NavLink to="/" activeStyle={activeStyle} exact className="mr-2  ">
              Tariflər
            </NavLink>
            <NavLink to="/" activeStyle={activeStyle} exact className="mr-2  ">
              Mağazalar
            </NavLink>
            <NavLink to="/" activeStyle={activeStyle} exact className="mr-2  ">
              Xəbərlər
            </NavLink>
            <NavLink to="/" activeStyle={activeStyle} exact className="mr-2  ">
              FAQ
            </NavLink>
            
            <NavLink to="/" activeStyle={activeStyle} exact className="ml-2  ">
              Əlaqə
            </NavLink>
          </nav>
            
          
       </div>
    </>
    
  );
};

export default Navbar;
