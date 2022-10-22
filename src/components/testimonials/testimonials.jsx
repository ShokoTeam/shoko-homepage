import React from "react";
import "./testimonials.css";
import "swiper/css";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Feedback from "../ui-components/feedback/feedback.jsx";
import Dribble from "../../images/icons/Dribble.svg";
import Icon from "../../images/icons/Success.svg";

const testimonials = () => {
  return (
    <div className="testimonials__container">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="swiper"
      >
        <SwiperSlide>
          <Feedback
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti eveniet assumenda quidem laboriosam repudiandae, autem tempore consectetur enim ratione eligendi?"
            name="userName"
          />
        </SwiperSlide>
        <SwiperSlide>Content 2</SwiperSlide>
        <SwiperSlide>Content 3</SwiperSlide>

        <SwiperSlide>Content 1</SwiperSlide>
        <SwiperSlide>Content 2</SwiperSlide>
        <SwiperSlide>Content 3</SwiperSlide>

        <SwiperSlide>Content 1</SwiperSlide>
        <SwiperSlide>Content 2</SwiperSlide>
        <SwiperSlide>Content 3</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default testimonials;
