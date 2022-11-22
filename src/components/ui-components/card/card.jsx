import React from "react";
import { Link, Text } from "@chakra-ui/react";
import { motion } from "framer-motion"

import "./card.css";

import {
  FaGithubSquare,
  FaTelegram,
  FaYoutube,
  FaBehanceSquare,
} from "react-icons/fa";
import { IconContext } from "react-icons";

const cardAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: custom => ({
    opacity: 1,
    transition: { delay: custom * 0.2 }
  })
}


const Card = (props) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 1, once: true }}
      variants={cardAnimation}
      className="card__container"
    >
      <div className="card">
        <div className="card-image">
          <img src={props.image} alt="cat" />
        </div>

        <ul className="social-icons">
          <li className="link">
            <Link href="https://github.com/craftzdog/dotfiles-public/tree/master/.config">
              <IconContext.Provider
                value={{
                  className: "icons",
                  size: 35,
                  alignItems: "center",
                }}
              >
                <div className="github">
                  <FaGithubSquare />
                </div>
              </IconContext.Provider>
            </Link>
          </li>

          <li className="link">
            <Link href="https://github.com/craftzdog/dotfiles-public/tree/master/.config">
              <IconContext.Provider
                value={{
                  className: "icons",
                  size: 35,
                  alignItems: "center",
                }}
              >
                <div className="telegram">
                  <FaTelegram />
                </div>
              </IconContext.Provider>
            </Link>
          </li>
          <li className="link">
            <Link href="https://github.com/craftzdog/dotfiles-public/tree/master/.config">
              <IconContext.Provider
                value={{
                  className: "icons",
                  size: 35,
                  alignItems: "center",
                }}
              >
                <div className="youtube">
                  <FaYoutube />
                </div>
              </IconContext.Provider>
            </Link>
          </li>

          <li className="link">
            <Link href="https://github.com/craftzdog/dotfiles-public/tree/master/.config">
              <IconContext.Provider
                value={{
                  className: "icons",
                  size: 35,
                  alignItems: "center",
                }}
              >
                <div className="behance">
                  <FaBehanceSquare />
                </div>
              </IconContext.Provider>
            </Link>
          </li>
        </ul>
        <div className="details">
          <Text fontWeight="bold" pt={4}>{props.name}</Text>
          <span className="role-title">{props.job}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
