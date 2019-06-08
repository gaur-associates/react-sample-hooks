import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { incCounter } from "./actions.js";

const IncButton = props => {
  return (
    <p>
      Counter = {props.counter} <br />
      <button onClick={props.increment}>Increment</button> <br />
    </p>
  );
};

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
