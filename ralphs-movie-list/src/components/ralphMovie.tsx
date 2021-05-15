import React from "react";
import { Component } from "react";
import MovieModel from "../models/ralphMovieModel";

interface MovieProps {
    MovieModel: MovieModel
}
interface MovieState {

}

class Movie extends Component<MovieProps, MovieState> {
    render () {
        let movie = this.props.MovieModel;
        return (
            <div className="movie-component">  
                <div className="row">
                    <div className="col-md-12">
                        <div><span className="movie-field">Name</span>: {movie.name}</div>
                        <div><span className="movie-field">Date Watched</span>: {movie.date}</div>                
                    </div>  
                </div>            
            </div>
        );
    } 
}

export default Movie;