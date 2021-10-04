import React from "react";
import "./Work.scss";
import WorkCard from "./WorkCard/WorkCard";
import WorkCard2 from "./WorkCard2/WorkCard2";
import { workProjects } from "./WorkData";

const Work = () => {
  return (
    <div className="work">
      <div className="work__top">
        <h3>My Work</h3>
      </div>
      <div className="work__bottom">
        {workProjects.map((project) => (
          <WorkCard2 project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
};

export default Work;
