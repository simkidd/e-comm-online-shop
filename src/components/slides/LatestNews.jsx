import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/navigation'

const LatestNews = () => {
  return (
    <div className="latest-news">
      <Swiper
      slidesPerView={3}
      spaceBetween={40}
      loop={true}
      modules={[Autoplay, Navigation]}
      autoplay={{delay:2500, disableOnInteraction:false}}
      navigation={true}
      >
        <SwiperSlide>
          <div className="news-img">
            <img src={require("../../assets/figma-1-logo.png")} alt="" />
          </div>
          <div className="news-content">
            <span>01 Jan 2015</span>
            <span>Fashion Industry</span>
            <span>Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="news-img">
            <img src={require("../../assets/figma-1-logo.png")} alt="" />
          </div>
          <div className="news-content">
            <span>01 Jan 2015</span>
            <span>Best Design Tools</span>
            <span>Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="news-img">
            <img src={require("../../assets/figma-1-logo.png")} alt="" />
          </div>
          <div className="news-content">
            <span>01 Jan 2015</span>
            <span>HR Community</span>
            <span>Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="news-img">
            <img src={require("../../assets/figma-1-logo.png")} alt="" />
          </div>
          <div className="news-content">
            <span>01 Jan 2015</span>
            <span>Tech and Life</span>
            <span>Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="news-img">
            <img src={require("../../assets/figma-1-logo.png")} alt="" />
          </div>
          <div className="news-content">
            <span>01 Jan 2015</span>
            <span>Fashion Industry</span>
            <span>Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="news-img">
            <img src={require("../../assets/figma-1-logo.png")} alt="" />
          </div>
          <div className="news-content">
            <span>01 Jan 2015</span>
            <span>Best Design Tools</span>
            <span>Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="news-img">
            <img src={require("../../assets/figma-1-logo.png")} alt="" />
          </div>
          <div className="news-content">
            <span>01 Jan 2015</span>
            <span>HR Community</span>
            <span>Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="news-img">
            <img src={require("../../assets/figma-1-logo.png")} alt="" />
          </div>
          <div className="news-content">
            <span>01 Jan 2015</span>
            <span>Tech and Life</span>
            <span>Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default LatestNews;
