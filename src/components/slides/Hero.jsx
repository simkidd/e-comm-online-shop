import React from "react";
// import slider react components
import { Swiper, SwiperSlide } from "swiper/react";
import { PromoSlide } from "../../data/productData";
// import modules
import { Pagination, Navigation, Autoplay } from "swiper";
// import swiper styles
import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/navigation'
import 'swiper/scss/autoplay'


const Hero = () => {
  return (
    <div className="promo-wrapper">
      <Swiper 
      slidesPerView={1}
      spaceBetween={0}
      modules={[Pagination,Navigation, Autoplay]}
      navigation={true}
      pagination={{clickable:true}}
      loop={true}
      autoplay={{delay:2500, disableOnInteraction:false}}>
        {PromoSlide.map((slide, i) => {
          return (
            <SwiperSlide>
              <img src={slide.image} alt="" />
              <span>{slide.title}</span>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Hero