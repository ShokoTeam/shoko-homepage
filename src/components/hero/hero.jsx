import React from "react";
import Logo from "../../images/logo_white.png";
import Arrow from "../../images/icons/ArrowDown.svg";
import "./hero.css";
import { Heading, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <div className="wrapper">
      <div class="parallax">
        <div class="parallax-content">
          <div className="hero__container">
            <img src={Logo} alt="shoko" className="hero__logo" />
            <div className="hero__content">
              <Heading fontSize={64}>Shoko</Heading>
              <Text>App development, and other</Text>
            </div>
            <img src={Arrow} alt="arrow" className="hero__arrow" />
          </div>
        </div>
        <div class="mask"></div>
      </div>
    </div>
  );
};

export default Hero;
