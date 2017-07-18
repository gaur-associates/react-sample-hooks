import React, { Component } from 'react';
import './App.css';

class Test extends Component {
  render() {
    return (
      <h3 >
        {this.props.name}
      </h3>
    );
  }
}

export default Test;
