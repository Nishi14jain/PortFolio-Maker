import React, { useState } from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
const [isOpen, setIsOpen] = useState(false); 
const toggleMenu =()=>{
  setIsOpen(!isOpen); 
}
    return (
    <>
      <Nav>
        {/* Add toggleMenu function to Bars onClick */}
        <Bars onClick={toggleMenu} />
        
        {/* Conditionally render NavMenu based on isOpen state */}
        <NavMenu isOpen={isOpen}>
          <NavLink to="/index" onClick={toggleMenu}> 
            Home
          </NavLink>
          <NavLink to="/about " onClick={toggleMenu}>
            About
          </NavLink>
          <NavLink to="/contact" onClick={toggleMenu}>
            Contact
          </NavLink><NavLink to="/show" onClick={toggleMenu} >
            Show
          </NavLink><NavLink to="/create" onClick={toggleMenu}>
            Create
          </NavLink>
        </NavMenu>
        <NavBtn>
                    <NavBtnLink to="/signin">
                        Sign In
                    </NavBtnLink>
                </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
