import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import styles from "../styles/scrollslider.module.css";

// import required modules
import { Mousewheel, Pagination } from "swiper";

export default function ScrollSlider() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className={styles.scroll}
      >
        <SwiperSlide className={styles.slide}>
          <div className={styles.img1}></div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.img2}></div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.img3}></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
