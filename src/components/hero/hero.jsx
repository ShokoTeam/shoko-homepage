import React from "react";
import { motion } from "framer-motion"
import Logo from "../../images/logo_white.png";
import Arrow from "../../images/icons/ArrowDown.svg";
import "./hero.css";
import { Text } from "@chakra-ui/react";

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 }
  })
}


const Hero = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className="wrapper"
    >
      <div class="parallax">
        <div class="parallax-content">
          <div className="hero__container">
            <img src={Logo} alt="shoko" className="hero__logo" />
            <div className="hero__content">
              <motion.h1 custom={1} variants={textAnimation} >
                Shoko
              </motion.h1>
              <Text>App development, and other</Text>
            </div>
            <img src={Arrow} alt="arrow" className="hero__arrow" />
          </div>
        </div>
        <div class="mask"></div>
      </div>
    </motion.div>
  );
};

export default Hero;
