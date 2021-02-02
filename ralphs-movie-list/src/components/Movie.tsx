import React from "react";
import { Component } from "react";
import MovieModel from "../models/MovieModel";

interface MovieProps {
    MovieModel: MovieModel
}
interface MovieState {

}

export default class Movie extends Component<MovieProps, MovieState> {
    render () {
        let movie = this.props.MovieModel;
        return (
            <div className="movie-component">  
                <div className="row">
                    <div className="col-md-4">
                        {movie.imdbUrl !== "" &&
                            <a href={movie.imdbUrl} target="_blank" rel="noopener noreferrer">
                                <img src={movie.thumbnail} alt={movie.name} className="movie-image" />
                            </a>                         
                        }
                    </div>     
                    <div className="col-md-8">
                        <div><span className="movie-field">Name</span>: {movie.name}</div>
                        <div><span className="movie-field">Date Watched</span>: {movie.date}</div>
                        {movie.releaseYear !== "" &&
                            <div><span className="movie-field">Release Year</span>: {movie.releaseYear}</div>                         
                        }    
                        {movie.imdbUrl !== "" &&
                            <div>
                                <a href={movie.imdbUrl}>{movie.imdbUrl}</a>                            
                            </div>                         
                        }                  
                    </div>  
                </div>            
            </div>
        );
    } 
}