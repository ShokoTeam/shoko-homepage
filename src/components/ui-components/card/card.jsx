import React from "react";
import "./card.css";
import {
  FaGithubSquare,
  FaTelegram,
  FaYoutube,
  FaBehanceSquare,
} from "react-icons/fa";

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <div className="card-image">
          <img src={props.image} alt="cat" />
        </div>
        <ul className="social-icons">
          <li>
            <a href="#">
              <FaGithubSquare />
            </a>
          </li>
          <li>
            <a href="#">
              <FaTelegram />
            </a>
          </li>
          <li>
            <a href="#">
              <FaYoutube />
            </a>
          </li>
          <li>
            <a href="#">
              <FaBehanceSquare />
            </a>
          </li>
        </ul>
        <div className="details">
          <h2>{props.name}</h2>
          <span className="job-title">{props.job}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
