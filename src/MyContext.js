import React from "react";

// set the defaults
const MyContext = React.createContext({
  userName: "en",
  changeuserName: () => {}
});

export default MyContext;
