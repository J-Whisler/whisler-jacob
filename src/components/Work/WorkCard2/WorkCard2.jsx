import React, { useState } from "react";
import "./WorkCard2.scss";

const WorkCard2 = ({ project }) => {
  const [cardHover, setCardHover] = useState(false);
  return (
    <div
      className="workCard2"
      onMouseLeave={() => setCardHover(false)}
      onMouseEnter={() => setCardHover(true)}
    >
      <div className="workCard2__top">
        <div className="workCard2__topLogo">
          <div></div>
          <h3
            style={{
              color: `${project.color}`,
              backgroundColor: `${project.backgroundColor}`,
              textShadow: `0px 0px 40px ${project.color}`,
            }}
          >
            {project.letter}
          </h3>
          <div></div>
        </div>
        <div className="workCard2__topTitle">
          <h5>{project.title}</h5>
        </div>
        <div className="workCard2__topTitleInfo">
          <div className="workCard2__topTitleInfoHoverMessage">
            <p>
              Hover here for more info about <span>{project.title}</span>
            </p>
          </div>
          <div className="workCard2__topTitleInfoHoverTitleDescription">
            <p>{project.titleDescription}</p>
          </div>
        </div>

        {/* {cardHover ? (
          <div className="workCard2__topHoverMessage">
            <p>{project.titleDescription}</p>
          </div>
        ) : (
          <div className="workCard2__topHoverMessage">
            <p>Hover here for more info about {project.title}</p>
          </div>
        )} */}
      </div>
      <div className="workCard2__bottom">
        <div className="workCard2__bottomDescription">
          <p>
            <span>{project.title}</span> {project.description}
          </p>
        </div>
        <div className="workCard2__bottomButton">
          <div className="workCard2__bottomButtonText">
            <div className="workCard2__bottomButtonText1">
              <p>View</p>
            </div>
            <div className="workCard2__bottomButtonText2Container">
              <div className="workCard2__bottomButtonText2">
                <p>Project</p>
              </div>
              <div className="workCard2__bottomButtonText2Dotted"></div>
            </div>
            <div className="workCard2__bottomButtonText3">
              <p>Here</p>
            </div>
          </div>
          <div className="workCard2__bottomButtonArrow">
            <i className="fas fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard2;
