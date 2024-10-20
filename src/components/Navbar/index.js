import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
    return (
    <>
      <Nav>
        {/* Add toggleMenu function to Bars onClick */}
        <Bars />
        
        {/* Conditionally render NavMenu based on isOpen state */}
        <NavMenu >
          <NavLink to="/create">
            Create
          </NavLink>
          <NavLink to="/show" >
            Show
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
