import React from "react";
import Hleb from "../../../images/StaffCats/Hleb.jpg";
import "./card.css";

const Card = () => {
  return (
    <div>
      <div className="card">
        <div className="card-image">
          <img src={Hleb} alt="sd" />
        </div>
        <ul className="social-icons">
          <li>
            <a href="#">A</a>
          </li>
          <li>
            <a href="#">B</a>
          </li>
          <li>
            <a href="#">C</a>
          </li>
          <li>
            <a href="#">E</a>
          </li>
        </ul>
        <div className="details">
          <h2>Hleb</h2>
          <span className="job-title">UI Designer</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
