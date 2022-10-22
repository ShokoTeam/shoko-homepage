import React from "react";
import "./card.css";
import Tilt from "react-parallax-tilt";

const card = ({ name, image }) => {
  return (
    <Tilt
      className="parallax-on-track"
      perspective={400}
      glareEnable={true}
      glareMaxOpacity={0.75}
      glarePosition="all"
      scale={1.02}
    >
      <div className="card__container">
        <div className="card__header">
          <img src={image} height="100%" width="100%" alt="header__image" />
        </div>
        <div className="card__bottom"></div>
      </div>
      <div className="inner-element"></div>
    </Tilt>
  );
};

export default card;
