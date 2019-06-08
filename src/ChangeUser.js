import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { lastUser } from "./actions.js";
import getListOfUsers from "./listOfUsers";

class ChangeUser extends Component {
  render() {
    return (
      <p>
        last incremented by = {this.props.userName} <br />
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
