import React from "react";
import "./team.css";
import Card from "../ui-components/card/card.jsx";

const team = () => {
  return (
    <div className="team__container">
      <div className="team__content">
        <h3 className="team__sub">
          We are ordinary people, who are united by common interests and as well
          as the desire to improve ourselvers. As we are young developer, we
          still have a lot to achieve
        </h3>
        <h3 className="team__description">
          We don't know where thsi path would lead us to but we hope to achieve
          a lot
        </h3>
        <h1 className="team__heading">Our Team</h1>
        <div className="team__card-list"></div>
      </div>
    </div>
  );
};

export default team;
