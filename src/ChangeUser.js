import React from "react";
import GetList from "./GetList";
import MyContext from "./MyContext";

const ChangeUser = () => {
  let userList = ["Yogi", "gaur", "Yogesh"];
  const myColor = { color: "brown" };
  return (
    <fieldset style={myColor}>
      <legend>Change last user</legend>

      <MyContext.Consumer>
        {({ userName, changeuserName }) => (
          <p>
            last incremented by = {userName} <br />
            <select onChange={event => changeuserName(event.target.value)}>
              <GetList list={userList} />
            </select>
          </p>
        )}
      </MyContext.Consumer>
    </fieldset>
  );
};

export default ChangeUser;
