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
    >
      <div className="card__container">
        <div className="card-image">
          <img src={props.image} alt="cat" />
        </div>
        <ul className="social-icons">
          <li>
            <Link href="#">
              <FaGithubSquare />
            </Link>
          </li>
          <li>
            <Link href="#">
              <FaTelegram />
            </Link>
          </li>
          <li>
            <Link href="#">
              <FaYoutube />
            </Link>
          </li>
          <li>
            <Link href="#">
              <FaBehanceSquare />
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
