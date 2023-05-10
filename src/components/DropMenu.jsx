import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

export default function DropMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleDropdown}>Dropdown</button>
      <CSSTransition in={isOpen} timeout={300} classNames="menu" unmountOnExit>
        <ul>
          <li>출판사별</li>
          <li>출판사 1</li>
          <li>출판사 2</li>
          <li>출판사 3</li>
        </ul>
      </CSSTransition>
    </div>
  );
}
