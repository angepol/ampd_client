// import './App.css';
import React from 'react';
import Home from './components/pages/Home'
import Header from './components/Header'
import Banner from './components/Banner'



import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (

    <div className="app">

<Header />

<Home />

    </div>



  );
}
export default App;
