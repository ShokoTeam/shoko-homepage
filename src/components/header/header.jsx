import React from "react";
import "./header.css";
import "../../styles/global.css";
import Logo from "../../images/logo_white.png";
import Arrow from "../../images/icons/Arrow.svg";

const header = () => {
  return (
    <div className="header__container">
      <img src={Logo} alt="logo" className="header__logo" />
      <div className="header__content">
        <h1 className="header__heading">Shoko</h1>
        <h3 className="header__desription">App development, and other</h3>
      </div>
      <img src={Arrow} alt="arrow" className="header__arrow" />
    </div>
  );
};

export default header;
