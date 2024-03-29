import React, { useReducer, useContext, useMemo } from "react";
import { reducerCnt } from "./reducers.js";
import MyContext from "./MyContext";
import GetList from "./GetList";

let progList = ["JavaScript", "C#", "Java"];

const IncButton = () => {
  let context = useContext(MyContext);
  const [counter, dispatch] = useReducer(reducerCnt);

  const myColor = { color: "green" };
  const myBar = { float: "right" };

  const fn = useMemo(() => {
    return <GetList list={progList} />;
  }, []);

  return (
    <>
      <fieldset style={myColor}>
        <legend>Programming Languages</legend>
        <select>{fn}</select>

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
