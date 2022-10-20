import React from "react";
import "./footer.css";
import Logo from "../../images/logo_white.png";

const footer = () => {
  return (
    <div className="footer__container">
      <div className="link__container">
        <a href="#">
          <img src={Logo} alt="shoko" className="footer__logo" />
        </a>
        <a href="">
          <p className="footer__link">Donate</p>
        </a>
        <a href="">
          <p className="footer__link">Github</p>
        </a>
        <a href="">
          <p className="footer__link">VK</p>
        </a>
        <a href="">
          <p className="footer__link">Privacy Policy</p>
        </a>
      </div>
    </div>
  );
};

export default footer;
