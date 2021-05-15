import React from "react";
import { Switch, Route } from "react-router-dom";
import RalphsMoviesList from "./ralphsMovieList";
import AboutRalph from './aboutRalph';
import AboutRalphsMovieList from './aboutRalphsMovieList'; 
import MovieDetail from "./movieDetail";

function ComponentContent () {
    return (
        <div className="component-content">
            <Switch>
                <Route exact path="/" component={ AboutRalph }/>
                <Route exact path="/about-ralph" component={ AboutRalph }/>
                <Route exact path="/movies" component={ RalphsMoviesList }/>
                <Route exact path="/movies/:number" component={ MovieDetail }/>
                <Route exact path="/about-ralphs-movie-list" component={ AboutRalphsMovieList }/>  
                <Route exact path="/about-this-site" component={ AboutRalphsMovieList }/>            
                <Route exact render={ () => <div className="component">No content found.</div> }/>
            </Switch>              
        </div>   
    );
}

export default ComponentContent;