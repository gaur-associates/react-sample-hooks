import React from "react";
import getListOfUsers from "./listOfUsers";
import MyContext from "./MyContext";

const ChangeUser = () => {
  return (
    <p>
      last incremented by = Fix this <br />
      <select onChange={event => null}>{getListOfUsers()}</select>
    </p>
  );
};

export default ChangeUser;
