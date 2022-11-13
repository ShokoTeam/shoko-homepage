import React from "react";
import { motion } from "framer-motion"
import "./card.css";
import {
  FaGithubSquare,
  FaTelegram,
  FaYoutube,
  FaBehanceSquare,
} from "react-icons/fa";
import { Text } from "@chakra-ui/react";

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
      viewport={{ amount: 1 }}
      variants={cardAnimation}
    >
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
          <Text fontWeight="bold" pt={4}>{props.name}</Text>
          <span className="job-title">{props.job}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
