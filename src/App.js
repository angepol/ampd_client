import { Component } from "react";

import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import CenteredContainer from "./componenets/CenteredContainer.style";

class App extends Component {
  state = {
    user: {},
    error: "",
  };

  componentDidMount() {
    let token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:4001/profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.id) {
            this.setState({
              user: result,
            });
          }
        });
    }
  }

  // To be called in the NavBar
  signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  signingIn = true;

  render() {
    return (
      <div className="App">
        <h2>Welcome {this.state.user.name}</h2>
      </div>
    );
  }
}

export default App;
