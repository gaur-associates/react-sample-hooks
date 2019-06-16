import React, { useReducer, useContext } from "react";
import { reducerCnt } from "./reducers.js";
import MyContext from "./MyContext";
import GetList from "./GetList";

const IncButton = () => {
  let context = useContext(MyContext);
  const [counter, dispatch] = useReducer(reducerCnt);

  let progList = ["JavaScript", "C#", "Java"];

  const myColor = { color: "green" };
  const myBar = { float: "right" };

  return (
    <>
      <fieldset style={myColor}>
        <legend>Programming Languages</legend>
        <select>
          <GetList list={progList} />
        </select>

        <div style={myBar}>
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
        </div>
        <br />
      </fieldset>
    </>
  );
};

export default IncButton;
