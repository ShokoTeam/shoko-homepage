import React from "react";
import "./card.css";
import Tilt from "react-tilt";

const card = ({ number }) => {
  return (
    <Tilt
      className="Tilt"
      options={{ max: 25, speed: 400 }}
      style={{ height: 250, width: 250 }}
    >
      <div className="Tilt-inner">Card {number} </div>
    </Tilt>
  );
};

export default card;
