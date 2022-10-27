import React from "react";
import "./team.css";
import Card from "./../ui-components/card/card.jsx";

import Hleb from "../../images/StaffCats/Hleb.jpg";
import Daria from "../../images/StaffCats/artiskat.png";
import Pasha from "../../images/StaffCats/shoshi.png";
import Ruslan from "../../images/StaffCats/ruslan.jpg";

const team = () => {
  return (
    <div className="team__container">
      <div className="team__wrapper">
        <div className="team__content gradient">
          <h3 className="team__sub ">
            We are ordinary people, who are united by common interests and as
            well as the desire to improve ourselvers. As we are young developer,
            we still have a lot to achieve
          </h3>
          <p className="team__description">
            We don't know where this path would lead us to but we hope to
            achieve a lot
          </p>
        </div>

        <h1 className="team__heading">Our Team</h1>
        <div className="team__card-container">
          <Card name="Pavel Lobachev" job="Tech Lead" image={Pasha} />
          <Card name="Daria Averina" job="Illustrator" image={Daria} />
          <Card name="Gabdraupov Ruslan" job="Writer" image={Ruslan} />
          <Card name="Kotovsky Gleb" job="UI UX Designer" image={Hleb} />
        </div>
      </div>
    </div>
  );
};

export default team;
