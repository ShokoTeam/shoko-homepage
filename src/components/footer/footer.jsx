import React from "react";
import "./footer.css";

const footer = () => {
  return (
    <div>
      <div class="waves">
        <div class="wave" id="wave1"></div>
        <div class="wave" id="wave2"></div>
        <div class="wave" id="wave3"></div>
        <div class="wave" id="wave4"></div>
      </div>
      <ul class="social_icon">
        <li>
          <a href="#">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>
        <li>
          <a href="#">
            <ion-icon name="logo-twitch"></ion-icon>
          </a>
        </li>
        <li>
          <a href="#">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>
        <li>
          <a href="#">
            <ion-icon name="logo-web-component"></ion-icon>
          </a>
        </li>
      </ul>
      <ul class="menu">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Team</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <p>@2022 TerrniT| All rights Reserved</p>
    </div>
  );
};

export default footer;
