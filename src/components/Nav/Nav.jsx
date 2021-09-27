import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <div className="nav__logoInitials">
          <Link to="/" className="nav__logoInitialsLink">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="nav__logoWords">
          <p className="nav__logoWords1">Design &</p>
          <p className="nav__logoWords2">Development</p>
        </div>
      </div>
      <div className="nav__links">
        <Link to="/" className="nav__linksLink">
          Home
        </Link>
        <div className="nav__linksDivider"></div>
        <Link to="/about" className="nav__linksLink">
          About
        </Link>
        <div className="nav__linksDivider"></div>
        <Link to="/work" className="nav__linksLink">
          Work
        </Link>
        <div className="nav__linksDivider"></div>
        <Link to="/skills" className="nav__linksLink">
          Skills
        </Link>
      </div>
      <div className="nav__buttons">
        <Link to="/contact" className="nav__buttonsLink">
          Contact Me
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
