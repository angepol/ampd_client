import React, { Component } from "react";
import Map from "../Map.js";
import "./FindSpaceStyle.js";
import Header from "../Header.js";
import Footer from "../Footer.js";

class FindSpace extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Map />
      </div>
    );
  }
}

export default FindSpace;
