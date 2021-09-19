import React from "react";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <div className="nav__logoInitials">JW</div>
        <div className="nav__logoWords">
          <p className="nav__logoWords1">Design &</p>
          <p className="nav__logoWords2">Development</p>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
