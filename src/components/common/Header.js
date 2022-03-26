import React from "react";
import { NavLink } from "react-router-dom";


const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <>
       <div className="md:container h-8  flex items-center justify-between" >
          <div className="w-auto  flex items-center">
            <img src={"/assets/img/phone.svg"} className="w-5"/>
            <p className="text-zinc-50 pl-3">*7777 Müştəri xidmətləri</p>
          </div>
          <div className="flex items-center">
            <NavLink to="/" activeStyle={activeStyle} exact className="mr-2 text-zinc-50 ">
              Qeydiyyat
            </NavLink>
            <p className="text-zinc-50">|</p>
            <NavLink to="/" activeStyle={activeStyle} exact className="ml-2 text-zinc-50 ">
             Daxil ol
            </NavLink>
          </div>
       </div>
    </>
    
  );
};

export default Header;
