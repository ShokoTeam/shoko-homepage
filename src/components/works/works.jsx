import React, { useState } from "react";

import {
  Controller,
  EffectFade,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./works.css";
import data from "./data.json";
const Works = () => {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  return (
    <div className="works__container">
      <div className="carousel__content">
        <Swiper
          direction={"vertical"}
          className="carousel__left"
          slidesPerView={1}
          spaceBetween={0}
          effect={"fade"}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          modules={[Controller, EffectFade, Pagination, Mousewheel]}
          onSwiper={setFirstSwiper}
          controller={{ control: secondSwiper }}
        >
          {data.map((item) => (
            <div className="swiper__slider-left" key={item.id}>
              <SwiperSlide style={{ backgroundColor: `${item.content.color}` }}>
                <div className="slider-left__heading">
                  <h3>We built</h3>
                  <a href="#">{item.name}</a>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>

      <div className="carousel__image">
        <Swiper
          direction={"vertical"}
          className="carousel__right"
          modules={[Controller, EffectFade]}
          onSwiper={setSecondSwiper}
          controller={{ control: firstSwiper }}
          effect={"fade"}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="product-container">
                <img
                  src={item.content.image}
                  alt="produce"
                  className="product-image"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Works;
