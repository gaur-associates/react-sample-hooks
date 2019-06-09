import React from "react";
import getListOfUsers from "./listOfUsers";
import MyContext from "./MyContext";

const ChangeUser = () => {
  return (
    <MyContext.Consumer>
      {({ userName, changeuserName }) => (
        <p>
          last incremented by = {userName} <br />
          <select onChange={event => changeuserName(event.target.value)}>
            {getListOfUsers()}
          </select>
        </p>
      )}
    </MyContext.Consumer>
  );
};

export default ChangeUser;
