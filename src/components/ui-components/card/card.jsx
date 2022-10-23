import React from "react";
import "./card.css";

const card = ({ image }) => {
  return (
    <div>
      <div className="card__container">
        <div className="card__header">
          <img src={image} alt="header__image" />
        </div>
        <div className="card__bottom"></div>
      </div>
      <div className="inner-element"></div>
    </div>
  );
};

export default card;
