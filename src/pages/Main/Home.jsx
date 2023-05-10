import React, { useState, useEffect } from "react";
import styles from "../../styles/home.module.css";
import Intro from "./Intro";

export default function Home() {
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.logoImg}></div>
        <div className={styles.mainText}>
          <div className={styles.text1}>
            <h3>📌 이제 곧 고등학교 진학... 무슨 문제집이 좋을까?</h3>
          </div>
          <div className={styles.text2}>
            <h3>📌 우리 학교 내신 대비... 이 문제집을 사는 게 맞을까?</h3>
          </div>
          <div className={styles.text3}>
            <h3>📌 수능/모의고사 대비... 무슨 문제집으로 시작하지?</h3>
          </div>
        </div>
      </div>
      <Intro />
    </div>
  );
}
