import React from 'react';
import movieData from "./data/movies.json";
import MoviesList from "./components/MoviesList";
import './RalphsMoviesApp.css';

function RalphsMoviesApp() {  
  return (
    <div className="App">
      <header className="App-header">
        Ralph's Movie List
      </header>
      <div className="content">
        <MoviesList Movies={movieData} />        
      </div>
    </div>
  );
}

export default RalphsMoviesApp;
