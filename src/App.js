import { Component } from "react";
import React from 'react';
import Footer from './components/Footer';
import FooterStyle from './components/FooterStyle';
import FindSpace from './components/pages/FindSpace';
import MainSiteA from './components/MainSiteA'
import Home from './components/pages/Home'
import Header from './components/Header'
import Banner from './components/Banner'
import Map from './components/Map';
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import CenteredContainer from "./componenets/CenteredContainer.style";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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

        <Header />
        <Home />

        <Map />
        <Footer />
        
      </div>
    );
  }
}

export default App;
