import React from "react";
import "./testimonials.css";

import "swiper/css";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import Feedback from "../ui-components/feedback/feedback.jsx";

// TODO: Delete hardcode text value in Feedback and create data source

const testimonials = () => {
  return (
    <div className="testimonials__container">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Feedback
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti eveniet assumenda quidem laboriosam repudiandae, autem tempore consectetur enim ratione eligendi?"
            name="userName"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Feedback
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti eveniet assumenda quidem laboriosam repudiandae, autem tempore consectetur enim ratione eligendi?"
            name="userName"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Feedback
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti eveniet assumenda quidem laboriosam repudiandae, autem tempore consectetur enim ratione eligendi?"
            name="userName"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Feedback
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti eveniet assumenda quidem laboriosam repudiandae, autem tempore consectetur enim ratione eligendi?"
            name="userName"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Feedback
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti eveniet assumenda quidem laboriosam repudiandae, autem tempore consectetur enim ratione eligendi?"
            name="userName"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Feedback
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti eveniet assumenda quidem laboriosam repudiandae, autem tempore consectetur enim ratione eligendi?"
            name="userName"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default testimonials;
