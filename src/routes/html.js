import React from "react";
import { CSSTransition } from "react-transition-group";
import "./html.css";

const Html = () => {
  return (
    <CSSTransition timeout={4000} in={true} appear classNames="box">
      <ul className="box">
        <li>one</li>
        <li>two</li>
        <li>three</li>
        <li>four</li>
      </ul>
    </CSSTransition>
  );
};

export default Html;
