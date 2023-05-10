import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import React, { useRef, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";

import styles from "../styles/imgslider.module.css";

SwiperCore.use([Autoplay]);
export default function ImgSlider() {
  return (
    <>
      <Swiper
        modules={([Autoplay], [Pagination])}
        autoplay={{ delay: 2000 }}
        pagination={{
          dynamicBullets: true,
        }}
        className={styles.mySwiper}
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
