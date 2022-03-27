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
            <NavLink to="/"  className="mr-4 hover:bg-maincolor hover:text-white p-2 rounded ">
              Haqqında
            </NavLink>
            <NavLink to="/"   className="mr-4 hover:bg-maincolor hover:text-white p-2 rounded ">
              Xidmətlər
            </NavLink>
            <NavLink to="/"   className="mr-4 hover:bg-maincolor hover:text-white p-2 rounded ">
              Tariflər
            </NavLink>
            <NavLink to="/"   className="mr-4 hover:bg-maincolor hover:text-white p-2 rounded ">
              Mağazalar
            </NavLink>
            <NavLink to="/"   className="mr-4 hover:bg-maincolor hover:text-white p-2 rounded ">
              Xəbərlər
            </NavLink>
            <NavLink to="/"  className="mr-4 hover:bg-maincolor hover:text-white p-2 rounded ">
              FAQ
            </NavLink>
            
            <NavLink to="/" className=" hover:bg-maincolor hover:text-white p-2 rounded ">
              Əlaqə
            </NavLink>
          </nav>
            
          
       </div>
    </>
    
  );
};

export default Navbar;
