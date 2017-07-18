import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Test.js'
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Test name="Gaur Associates" />
        <p>
          Counter = {this.props.counter}
        </p>
      </div>

    );
  }
}

function mapStateToProps(state){
    return {
        counter : state.cnt
    }
}

export default connect(mapStateToProps)(App);
