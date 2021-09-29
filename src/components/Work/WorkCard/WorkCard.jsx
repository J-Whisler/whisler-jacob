import React, { useState } from "react";
import "./WorkCard.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const workCardBottomAnim = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 1,
      stiffness: 80,
      damping: 13,
      delay: 0.8,
    },
  },
};

const WorkCard = ({ project }) => {
  //   const [cardHover, serCardHover] = useState(project.hoverState);
  return (
    <div
      className="workCard"
      //   onMouseEnter={() => serCardHover(true)}
      //   onMouseLeave={() => serCardHover(false)}
    >
      <div className="workCard__top">
        <div className="workCard__topLogo">
          <div className="workCard__topLogoDivider"></div>
          <h3
            style={{
              background: project.backgroundColor,
              color: project.color,
              textShadow: `0px 0px 45px ${project.color}`,
            }}
          >
            {project.letter}
          </h3>
          <div className="workCard__topLogoDivider"></div>
        </div>
        <div className="workCard__topTitle">
          <h4>{project.title}</h4>
        </div>
      </div>
      <div className="workCard__bottom">
        <div className="workCard__bottomHoverMessage">Hover</div>
        <div className="workCard__bottomInfo">
          <p className="workCard__bottomInfoDescription">
            <Link>{project.title} </Link>
            {project.description}
          </p>
        </div>
      </div>
      {/* <div className="workCard__top">
        <div className="workCard__topLogo">
          <div className="workCard__topLogoDivider"></div>
          <h4>{project.letter}</h4>
          <div className="workCard__topLogoDivider"></div>
        </div>
      </div>
      <motion.div
        className="workCard__bottom"
        variants={workCardBottomAnim}
        initial="hidden"
        animate="show"
      >
        {cardHover ? (
          <div className="workCard__bottomInfo">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            explicabo possimus incidunt assumenda quis nihil iure a accusamus,
            totam atque corporis error optio deserunt illum suscipit. Magni,
            excepturi eaque? Commodi neque corporis tempora, sed hic,
            voluptatibus atque doloribus deserunt perspiciatis harum sint a
            sapiente natus! Eius unde dignissimos autem aspernatur temporibus
            molestiae natus nulla quae. Culpa saepe qui facere aliquid
            reiciendis sapiente id recusandae quasi, voluptatem adipisci, ipsa
            mollitia repellendus dolorem dicta assumenda reprehenderit
            accusantium molestias quod ut, accusamus quam iste voluptatum.
            Officiis, dolore voluptatibus. Consequuntur debitis sunt error ut.
            Aut iusto totam ea tenetur exercitationem. Iste nemo quisquam
            quaerat.
          </div>
        ) : (
          <div className="workCard__bottomHoverMessage">Goodbye</div>
        )}
      </motion.div> */}
    </div>
  );
};

export default WorkCard;
