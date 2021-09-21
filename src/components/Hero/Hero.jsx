import React from "react";
import { Link } from "react-router-dom";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__top">
        <div className="hero__topLeft">
          <p>
            <i className="fas fa-map-pin"></i>Cleveland, OH
          </p>
          <h2>Hi! My name is Jacob.</h2>
          <h5>I am a Front-End Web Developer and Designer.</h5>
          <div className="hero__topLeftWork">
            <h4>Click here to check out my work!</h4>
            <Link to="/work" className="hero__topLeftWorkLink">
              My Work
            </Link>
          </div>
        </div>
        <div className="hero__topRight">Top Right</div>
      </div>
      <div className="hero__bottom">Hero Bottom</div>
    </div>
  );
};

export default Hero;
