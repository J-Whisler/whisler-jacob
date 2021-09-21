import React from "react";
import "./HomePage.scss";
import Nav from "../../components/Nav/Nav";
import Hero from "../../components/Hero/Hero";
const HomePage = () => {
  return (
    <div className="homepage">
      <Nav />
      <Hero />
    </div>
  );
};

export default HomePage;
