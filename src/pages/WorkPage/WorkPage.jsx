import React from "react";
import "./WorkPage.scss";

import Nav from "../../components/Nav/Nav";
import Work from "../../components/Work/Work";

const WorkPage = () => {
  return (
    <div className="workpage">
      <Nav />
      <Work />
    </div>
  );
};

export default WorkPage;
