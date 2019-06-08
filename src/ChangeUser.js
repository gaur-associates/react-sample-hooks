import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { lastUser } from "./actions.js";
import getListOfUsers from "./listOfUsers";

const ChangeUser = props => {
  const change = event => {
    props.changeUserName(event.target.value);
  };

  return (
    <p>
      last incremented by = {props.userName} <br />
      <select onChange={change}>{getListOfUsers()}</select>
    </p>
  );
};

function mapStateToProps(state) {
  return {
    userName: state.user
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      changeUserName: lastUser
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(ChangeUser);
