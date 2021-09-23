import React from "react";
import About from "../../components/About/About";
import Nav from "../../components/Nav/Nav";
import "./AboutPage.scss";

const AboutPage = () => {
  return (
    <div className="aboutpage">
      <Nav />
      <About />
    </div>
  );
};

export default AboutPage;
