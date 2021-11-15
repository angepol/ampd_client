// import './App.css';
import React from 'react';
import Footer from './components/Footer';
import FooterStyle from './components/FooterStyle';
import FindSpace from './components/pages/FindSpace';
import MainSiteA from './components/MainSiteA'
import Home from './components/pages/Home'
import Header from './components/Header'
import Banner from './components/Banner'




import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (

    <div >
      <FindSpace />
      <Footer />
    </div>


  );
}

export default App;
