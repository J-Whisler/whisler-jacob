import React from "react";
import "./Work.scss";
import WorkCard from "./WorkCard/WorkCard";
import { workProjects } from "./WorkData";

const Work = () => {
  return (
    <div className="work">
      <div className="work__top">
        <h3>My Work</h3>
      </div>
      <div className="work__bottom">
        {workProjects.map((project) => (
          <WorkCard project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
};

export default Work;
