import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import IncButton from "./IncButton";
import ChangeUser from "./ChangeUser";

import { Link, Route } from "react-router-dom";
import Html from "./routes/html";
import Css from "./routes/css";
import About from "./routes/about";
import Title from "./Title";
//import Posts from './routes/Posts';

import { StyleRoot } from "radium";
import Loadable from "react-loadable";

const LoadablePosts = Loadable({
  loader: () => import("./routes/Posts"),
  loading: () => {
    console.log("loading");
    return null;
  }
});

class App extends Component {
  divStyle = {
    color: "blue",
    fontSize: "x-large"
  };

  render() {
    return (
      <StyleRoot>
        <Title name={() => "React Hooks by Gaur Associates"} />
        <div style={this.divStyle}>
          <div>
            <img src={logo} className="App-logo" alt="logo" />
            <nav>
              <Link to="/html"> HTML </Link> |<Link to="/css"> CSS </Link> |
              <Link to="/about"> About </Link> |<Link to="/posts"> Posts </Link>{" "}
              |
            </nav>

            <Route path="/html" component={Html} />
            <Route path="/css" component={Css} />
            <Route path="/about" component={About} />
            <Route path="/posts" component={LoadablePosts} />
          </div>

          <IncButton />
          <ChangeUser />
        </div>
      </StyleRoot>
    );
  }
}

export default App;
