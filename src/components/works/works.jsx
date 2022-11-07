import React from "react";
import "./works.css";
import CardItem from "./CardItem";
import ImageFores from "../../images/mockups/Fores_mockUp.jpg";

// #TODO: Migrate this section to Chakra UI
function Works() {
  return (
    <div className="cards">
      <h1></h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={ImageFores}
              text="Project subscription"
              label="Adventure"
            />
            <CardItem
              src={ImageFores}
              text="Project subscription"
              label="Luxury"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={ImageFores}
              text="Project subscription"
              label="Mystery"
            />
            <CardItem
              src={ImageFores}
              text="Project subscription"
              label="Adventure"
            />
            <CardItem
              src={ImageFores}
              text="Project subscription"
              label="Adrenaline"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Works;
