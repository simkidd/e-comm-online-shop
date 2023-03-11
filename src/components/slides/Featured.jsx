import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { FeaturedProducts } from "../../data/productData";
// import rating and stack
import { Stack, Rating } from "@mui/material";

import "swiper/scss";
import "swiper/scss/autoplay";
import "swiper/scss/navigation";

const Featured = () => {
  return (
    <div className="featured-products">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        modules={[Navigation, Autoplay]}
        navigation={true}
        loop={true}
      >
        {FeaturedProducts.map((featured, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="featured-img">
                <img src={featured.image} alt="" />
              </div>
              <div className="featured-text">
                <span>{featured.name}</span>
                <span>
                  <Stack>
                    <Rating
                      name="rating"
                      defaultValue={featured.rating}
                      size="small"
                      readOnly
                    />
                  </Stack>
                </span>
                <span>
                  <span>${featured.price}</span>{" "}
                  {" "}<span>${featured.discount}</span>
                </span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Featured;
