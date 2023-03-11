import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { SliderProducts } from "../../data/productData";
import { Navigation, Autoplay } from "swiper";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/autoplay";

const Slider = () => {
  return (
    <div className="slide-wrapper">
      <Swiper
        slidesPerView={3}
        loop={true}
        spaceBetween={6}
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        navigation={true}
      >
        {SliderProducts.map((item) => {
          return (
            <SwiperSlide>
              <span>{item.name}</span>
              <img src={item.image} alt="" />
              <span>$ {item.discount}</span>
              <span>{item.percent}</span>
              <span>$ {item.price}</span>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
