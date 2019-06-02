import React from "react";
import Radium from "radium";

const About = () => {
  const h2style = {
    color: "blue",
    fontSize: "x-large",
    textAlign: "center",
    ":hover": {
      color: "green"
    },
    "@media screen and (min-width: 480px)": {
      backgroundColor: "yellow"
    }
  };

  return <h2 style={h2style}>About Gaur Associates</h2>;
};
export default Radium(About);
