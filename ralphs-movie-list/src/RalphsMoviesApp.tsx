import React from 'react';
import movieData from "./data/movies.json";
import MoviesList from "./components/MoviesList";
import MovieModel from "./models/MovieModel";
import './RalphsMoviesApp.css';

function RalphsMoviesApp() {  
  return (
    <div className="App">
      <header className="App-header">
        Ralph's Movie List
      </header>
      <div className="content">
        <div className="blurb">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <MoviesList Movies={movieData as MovieModel[]} />        
      </div>
      <footer className="App-footer">
        <div className="row">
          <div className="col-md-4">
            1st Column
          </div>
          <div className="col-md-4">
            2nd Column
          </div>
          <div className="col-md-4">
            3rd Column
          </div>
        </div>
      </footer>
    </div>
  );
}

export default RalphsMoviesApp;
