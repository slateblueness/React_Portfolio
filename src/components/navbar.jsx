import React, { useState } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import styles from "../styles/navbar.module.css";
import DropMenu from "./DropMenu";
import { CSSTransition } from "react-transition-group";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={styles.navbar}>
        <header className={styles.header}>
          <Link className={styles.title} to="/">
            📚 고문고
          </Link>
          <div className={styles.searchDiv}>
            <input
              className={styles.search}
              type="text"
              placeholder="문제집 고민될 땐? 고문고에서 검색!"
            />
            <button className={styles.btn}>🔍</button>
          </div>

          <div>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.link
              }
              to="/login"
            >
              Login
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.link
              }
              to="/mypage"
            >
              My page
            </NavLink>
          </div>
        </header>

        <header className={styles.header2}>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.activeLink2 : styles.link2
            }
            to="/for-grade1"
          >
            📗 예비 고1 / 국어 기초
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.activeLink2 : styles.link2
            }
            to="/for-school-test"
            onClick={toggleDropdown}
          >
            📘 출판사별 내신 대비
          </NavLink>
          <CSSTransition
            in={isOpen}
            timeout={300}
            classNames="menu"
            unmountOnExit
          >
            <ul style={{ position: "absolute" }}>
              <li>출판사별</li>
              <li>출판사 1</li>
              <li>출판사 2</li>
              <li>출판사 3</li>
            </ul>
          </CSSTransition>

          <NavLink
            className={({ isActive }) =>
              isActive ? styles.activeLink2 : styles.link2
            }
            to="/for-national-test"
          >
            📙 수능 / 모의고사 대비
          </NavLink>
        </header>
      </div>

      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames={styles.menu}
        unmountOnExit
      >
        <ul>
          <li>출판사별</li>
          <li>출판사 1</li>
          <li>출판사 2</li>
          <li>출판사 3</li>
        </ul>
      </CSSTransition>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
