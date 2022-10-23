import React from "react";
import "./testimonials.css";

import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import Feedback from "../ui-components/feedback/feedback.jsx";

// TODO: Delete hardcode text value in Feedback and create data source

const testimonials = () => {
  return (
    <div className="testimonials__container">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 80,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 60,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        centeredSlides
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="swiper"
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
