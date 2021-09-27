import React, { useState } from "react";
import "./WorkCard.scss";

const WorkCard = ({ project }) => {
  // const [cardHover, setCardHover] = useState(0);
  // console.log(cardHover);
  return (
    <div
      // onMouseEnter={() => setCardHover(1)}
      // onMouseLeave={() => setCardHover(0)}
      className="workCard"
    >
      <div className="workCard__top">
        <div className="workCard__topLogo">
          <div></div>
          <p
            style={{
              color: project.color,
              background: project.backgroundColor,
              textShadow: `0px 0px 30px ${project.color}`,
            }}
          >
            {project.letter}
          </p>
          <div></div>
        </div>
        <div className="workCard__topTitle">
          <h3>{project.title}</h3>
        </div>
      </div>
      <div className="workCard__bottom">
        <div className="workCard__bottomHoverMessage">
          <p>Hover here to see more information</p>
        </div>
        <div className="workCard__bottomInfo">
          <p>
            {project.title} {project.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
