import React, { useReducer, useContext } from "react";
import { reducerCnt } from "./reducers.js";
import MyContext from "./MyContext";

const IncButton = () => {
  return (
    <p>
      Counter = by Need to fill this in
      <br />
      <button onClick={() => null}>Increment</button> <br />
    </p>
  );
};

export default IncButton;
