import { Component } from "react";
import React from "react";
import Home from "./components/pages/Home";

class App extends Component {
  state = {
    user: {},
    error: "",
  };

  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
