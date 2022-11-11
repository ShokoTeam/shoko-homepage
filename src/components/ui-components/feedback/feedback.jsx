import React from "react";
import "./feedback.css";
import { Avatar } from "@chakra-ui/react";
import { useSwiperSlide } from "swiper/react";

const Feedback = (props) => {
  const swiperSlide = useSwiperSlide();

  return (
    <div
      className={swiperSlide.isActive ? "feedback__container" : "not-active"}
    >
      <div className="content__container">
        <h3 className="feedback__text">{props.text}</h3>
        <div className="profile__content">
          <Avatar mr={2} h={35} w={35} />
          <h3 className="profile__name">@{props.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
