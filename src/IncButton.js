import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { incCounter } from "./actions.js";

class IncButton extends Component {
  render() {
    return (
      <p>
        Counter = {this.props.counter} <br />
        <button onClick={this.props.increment}>Increment</button> <br />
      </p>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.cnt
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      increment: incCounter
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(IncButton);
