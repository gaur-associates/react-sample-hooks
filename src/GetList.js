import React from "react";

export default function GetList({ list }) {
  console.log("get list called");
  return list.map(el => {
    return (
      <option key={el} value={el}>
        {" "}
        {el}{" "}
      </option>
    );
  });
}
