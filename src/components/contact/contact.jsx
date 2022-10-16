import React from "react";
import "./contact.css";
import Logo from "../../images/logo_white.png";
import Form from "../ui-components/form/form.jsx";
const contact = () => {
  return (
    <div className="contact__container">
      <div className="contact__content">
        <img src={Logo} alt="logo" className="contact__logo" />
        <h3 className="contact__heading">Contact Us</h3>
        <Form />
      </div>
      <div className="footer__container">
        <div className="link__container">
          <a href="">
            <h3>Donate</h3>
          </a>

          <a href="">
            <h3>Github</h3>
          </a>

          <a href="">
            <h3>VK</h3>
          </a>

          <a href="">
            <h3>Privacy Policy</h3>
          </a>
        </div>
        <h3 className="footer__copyright">Copyright by ShokoTeam</h3>
      </div>
    </div>
  );
};

export default contact;
