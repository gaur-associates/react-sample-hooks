import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Test extends Component {
  render() {
    return (

        <p className="App-intro">
          {this.props.name}
        </p>

    );
  }
}

export default Test;
