import React, { Component } from 'react';
import logo from './logo.svg';
import reduxOverview from './redux.png'
import './App.css';
import Test from './Test.js'
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div >
        <div >
          <img src={logo} className="App-logo" alt="logo" />
          <img src={reduxOverview} /><br />

        </div>
        <p>
          Counter = {this.props.counter}
        </p>

      </div>
    );
  }
}

//export default App;

function mapStateToProps(state) {
  return {
    counter: state.cnt
  }
}

export default connect(mapStateToProps)(App);