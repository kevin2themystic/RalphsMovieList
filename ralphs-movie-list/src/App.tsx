import React from 'react';
import { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import logger from "./services/loggingService";
import Container from "@material-ui/core/Container";
import Header from "./components/header";
import Footer from "./components/footer";
import Menu from "./components/menu";
import ComponentContent from "./components/componentContent";
import './App.css';

class App extends Component {
  
  render () {
    logger.init();
    return (
      <div className="app">
        <Container fixed>
          <Header />  
          <Router>
            <div className="main-content">
              <Menu />
              <ComponentContent />        
            </div>
          </Router>
          <Footer />
        </Container>
      </div>
    );  
  }  
}

export default App;
