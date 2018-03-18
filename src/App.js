import React, { Component } from 'react';
import Head from './components/Head/Head';
import HeroImage from './components/HeroImage/HeroImage';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import FooterBottom from './components/FooterBottom/FooterBottom';
//import logo from './logo.svg';
import './App.css';


class App extends Component {
  
  render() {
    
    return (
      <div className="App">
        <Head />
        <HeroImage />
        <Content />
        <Footer />
        <FooterBottom />
      </div>
      
    );
  }
}

export default App;
