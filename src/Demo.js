import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { incCounter, userName } from "./actions.js";
import getListOfUsers from "./listOfUsers";

class Demo extends Component {
  render() {
    return (
      <p>
        Counter = {this.props.counter} <br />
        last incremented by = {this.props.userName} <br />
        <button onClick={this.props.increment}>Increment</button> <br />
        <select onChange={this.change}>{getListOfUsers()}</select>
      </p>
    );
  }

  change = event => {
    this.props.changeUserName(event.target.value);
  };
}

function mapStateToProps(state) {
  return {
    counter: state.cnt,
    userName: state.user
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      increment: incCounter,
      changeUserName: userName
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Demo);
