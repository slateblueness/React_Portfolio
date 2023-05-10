import React from "react";
import styles from "../../styles/intro.module.css";
import ImgSlider from "../../components/ImgSlider";
import ScrollSlider from "../../components/ScrollSlider";

export default function Intro() {
  return (
    <div className={styles.intro}>
      <h1 className={styles.title}>
        대형서점 사이트는 여럿 있어요! 그런데도 고문고를 만든 이유?
      </h1>
      <div className={styles.introImg}>
        <div className={styles.img2}></div>
        <ImgSlider />
      </div>
      <h1 className={styles.title2}>
        👆 이런 생각, 다들 해 본 적 있죠? 그래서 만들었어요!
      </h1>
      <ScrollSlider />
    </div>
  );
}
