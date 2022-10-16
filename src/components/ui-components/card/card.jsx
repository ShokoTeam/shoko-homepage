import React from "react";
import "./card.css";

const card = () => {
  return (
    <div className="component-container">
      <div className="component">
        <div className="img-container">
          <div className="img-overlay"></div>
          <div className="icon-container">
            <img src="../../../images/StaffCats/Hleb.jpg" alt="icon-view" />
          </div>
        </div>
        <h3 className="card-title white-text">Equilibrium #3429</h3>
        <p className="card-description light-blue-text">
          Our Equilibrium collection promotes balance and calm.
        </p>
        <div className="card-info">
          <div className="icon-with-text info-text">
            <img src="../../../images/icons/Success.svg" alt="icon-ethereum" />
            <p className="cyan-text">&nbsp;0.041 ETH</p>
          </div>
          <div className="icon-with-text info-text">
            <img src="../../../images/icons/Dribble.svg" alt="icon-clock" />
            <p className="light-blue-text">&nbsp;3 days left</p>
          </div>
        </div>
        <div className="icon-with-text creator-info">
          <img
            src="../../../images/spy_card 1.png"
            alt="image-avatar"
            className="avatar-image"
          />
          <p className="light-blue-text">
            &nbsp;&nbsp;&nbsp;Creation of
            <span className="white-text">Jules Wyvern</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default card;
