import React, { Component, Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
import './html.css';

class Html extends Component {
  render() {
    return (
      <CSSTransition timeout={4000} in={true} appear classNames="box">

          <ul className="box">
            <li >one</li>
            <li >two</li>
            <li >three</li>
            <li >four</li>
          </ul>

      </CSSTransition>

    );
  }
}
export default Html;
