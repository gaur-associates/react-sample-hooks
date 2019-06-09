import React from "react";

// set the defaults
const MyContext = React.createContext({
  userName: "dummy",
  changeuserName: () => {}
});

export default MyContext;
