import React from "react";
import "./About.scss";
import Me from "../../assets/images/me.JPG";

const About = () => {
  return (
    <div className="about">
      <div className="about__top">
        <h3>About Me</h3>
      </div>
      <div className="about__bottom">
        <div className="about__bottomLeft">
          <img src={Me} alt="" />
        </div>
        <div className="about__bottomRight">
          <p>Hello! My name is Jacob Whisler.</p>
          <p>
            I am a Front-End Web Developer and Designer living in Cleveland,
            Ohio.
          </p>
          <p>
            As a recent graduate of Case Western Reserve University's coding
            bootcamp, I am focused on continuing to build my skills as a
            developer and designer.
          </p>
          <p>
            My main areas of interest and focus are UI (User Interface) design,
            web animations, and user interactivity as well as more fronte-end
            web development tools and features.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
