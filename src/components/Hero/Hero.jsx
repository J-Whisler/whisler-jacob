import React from "react";
import { Link } from "react-router-dom";
import "./Hero.scss";

import HeroRight from "../../assets/images/hero-right.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__top">
        <div className="hero__topLeft">
          <p>
            <i className="fas fa-map-pin"></i>Cleveland, OH
          </p>
          <h2>
            <span>Hi!</span> My name is Jacob.
          </h2>
          <h5>I am a Front-End Web Developer and Designer.</h5>
          <div className="hero__topLeftWork">
            <h4>Click here to check out my work!</h4>
            <Link to="/work" className="hero__topLeftWorkLink">
              My Work
            </Link>
          </div>
        </div>
        <div className="hero__topRight">
          <img src={HeroRight} alt="" />
          <div className="hero__topRightResume">
            <p>Check out my resume!</p>
            <a href="#">My Resume</a>
          </div>
        </div>
      </div>
      <div className="hero__bottom">
        <div className="hero__bottomLeft">
          <i className="fas fa-handshake"></i>
          <h4>Check out my Social Media's!</h4>
          <div></div>
        </div>
        <div className="hero__bottomRight">
          <i className="fab fa-linkedin-in"></i>
          <i className="fab fa-github"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
        </div>
      </div>
    </div>
  );
};

export default Hero;
