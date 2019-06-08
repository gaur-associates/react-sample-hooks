import React from "react";

export default function getListOfUsers() {
  let userList = ["Yogi", "gaur", "Yogesh"];
  return userList.map(el => {
    return (
      <option key={el} value={el}>
        {" "}
        {el}{" "}
      </option>
    );
  });
}
