// React
import React from 'react';
import { Component } from "react";
import { Switch, NavLink, Route, BrowserRouter as Router } from "react-router-dom";

// 3rd party libraries
import Container from "@material-ui/core/Container";

// Custom Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import MoviesList from "./components/MoviesList";
// import MovieModel from "./models/MovieModel";
import AboutRalph from './components/AboutRalph';
import AboutRalphsMovieList from './components/AboutRalphsMovieList'; 

// Data
import movieData from "./data/movies.json";

//CSS
import './RalphsMoviesApp.css';

export default class RalphsMoviesApp extends Component {
  
  render () {
    return (
      <div className="app">
        <Container fixed>
          <Header />  
          <Router>
            <div className="menu">
              <div className="links">
                  <NavLink to="/movies" className="menu-link btn">Movies</NavLink>
                  <NavLink to="/about-ralph" className="menu-link btn">About Ralph</NavLink>
                  <NavLink to="/about-ralphs-movie-list" className="menu-link btn">About This Site</NavLink>
              </div>
              <div className="scroll">
                <Switch>
                    <Route exact path="/" component={ AboutRalph }/>
                    <Route exact path="/about-ralph" component={ AboutRalph }/>
                    <Route exact path="/movies" component={ () => <MoviesList Movies={movieData} /> }/>
                    <Route exact path="/about-ralphs-movie-list" component={ AboutRalphsMovieList }/>  
                    <Route exact path="/about-this-site" component={ AboutRalphsMovieList }/>            
                    <Route exact render={ () => <div className="component">No content found.</div> }/>
                </Switch>              
              </div>          
            </div>
          </Router>
          <Footer />
        </Container>
      </div>
    );  
  }  
  handleMenuOpenClick = (event: any) => {
    this.setState({
      anchorEl: event.currentTarget,
      isMenuOpen: true
    });
  };

  handleAboutRalphsMovieListClick = (event: any) => {
    this.setState({
      isMenuOpen: false,
      showAboutRalphsMovies: true,
      showAboutRalph: false,
      showMovies: false,
    });
  };
  handleAboutRalphClick = (event: any) => {
    this.setState({
      isMenuOpen: false,
      showAboutRalphsMovies: false,
      showAboutRalph: true,
      showMovies: false,
    });
  };
  handleViewAllMoviesClick = (event: any) => {
    this.setState({
      isMenuOpen: false,
      showAboutRalphsMovies: false,
      showAboutRalph: false,
      showMovies: true,
    });
  };
  handleMenuClose = (event: any) => {
    this.setState({
      anchorEl: {} as Element
    });
  };
}
