import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";
const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <h1 id="h-h1">EATWELL</h1>
          <ul className="ul">
            <NavLink to="/" className="li">
              HOME
            </NavLink>
            <NavLink to="/about" className="li">
              ABOUT
            </NavLink>
            <NavLink href="#offer" className="li">
              OFFER
            </NavLink>
            <NavLink to="/menu" className="li">
              MENU
            </NavLink>
            <NavLink to="/news" className="li">
              NEWS
            </NavLink>
            <NavLink to="/contact" className="li">
              CONTACT
            </NavLink>
            <NavLink to="/add" className="li">
              ADD
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
