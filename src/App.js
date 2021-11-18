import { Component } from "react";
import React from 'react';
import Footer from './components/Footer';
import FindSpace from './components/pages/FindSpace';
import MainSiteA from './components/MainSiteA'
import Home from './components/pages/Home'
import Header from './components/Header'
import Banner from './components/Banner'
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import CenteredContainer from "./componenets/CenteredContainer.style";
import Map from "./components/Map"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

  class App extends Component {
    state = {
      user: {},
      error: "",
  };

  render() {
    return (
      <div className="App">

        <Home/>
        <Footer />
      </div>
    );
  }
}

export default App;
