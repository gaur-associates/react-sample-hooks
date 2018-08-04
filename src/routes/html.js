import React, { Component, Fragment } from 'react';
import { Transition } from 'react-transition-group';
import './html.css';

class Html extends Component {
  render() {
    return (
      <Transition timeout={4000} in={true} appear>
        {(status) => (
          <ul className={`box box-${status}`}>
            <li >one</li>
            <li >two</li>
            <li >three</li>
            <li >four</li>
          </ul>
        )}
      </Transition>

    );
  }
}
export default Html;
