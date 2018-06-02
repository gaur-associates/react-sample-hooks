import React, { Component } from 'react';
import logo from './logo.svg';
import reduxOverview from './redux.png'
import './App.css';
import Test from './Test.js'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { incCounter, userName } from './actions.js';
import { Link, Route } from 'react-router-dom';
import Html from './routes/html';
import Css from './routes/css';
import About from './routes/about';

class App extends Component {

  divStyle = {
    color: 'blue',
    fontSize: 'x-large'
  };

  render() {
    return (
      <div style={this.divStyle}>
        <div >
          <img src={logo} className="App-logo" alt="logo" />
          <nav>
            <Link to='/html'> HTML </Link> |
            <Link to='/css'> CSS </Link> |
            <Link to='/about'> About </Link> |
          </nav>

          <Route path='/html' component={Html} />
          <Route path='/css' component={Css} />
          <Route path='/about' component={About} />
        </div>

        <p>

          Counter = {this.props.counter} <br />
          <button onClick={this.props.increment}>Increment</button> <br />
          <select onChange={this.change.bind(this)}>
            {this.getListOfUsers()}
          </select>
        </p>
      </div>
    );
  }
  getListOfUsers() {
    let userList = ["Yogi", "gaur", "Yogesh"];
    return userList.map((el) => {
      return (<option key={el} value={el}> {el} </option>);
    }
    );
  }
  change(event) {
    this.props.userName(event.target.value);
  }

}

//export default App;

function mapStateToProps(state) {
  return {
    counter: state.cnt,
    userName: state.user
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    increment: incCounter,
    userName: userName
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(App);