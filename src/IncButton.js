import React, { useReducer, useContext } from "react";
import { reducerCnt } from "./reducers.js";
import MyContext from "./MyContext";

const IncButton = () => {
  let context = useContext(MyContext);
  const [counter, dispatch] = useReducer(reducerCnt);

  return (
    <p>
      Counter = {counter} by {context.userName}
      <br />
      <button
        onClick={() =>
          dispatch({
            type: "ADD_CNT",
            payload: 1
          })
        }
      >
        Increment
      </button>{" "}
      <br />
    </p>
  );
};

export default IncButton;
