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
            <div className="movieComponent">  
                <div className="row">
                    <div className="col-md-4">
                        {movie.imdbUrl !== "" &&
                            <a href={movie.imdbUrl} target="_blank" rel="noopener noreferrer">
                                <img src={movie.thumbnail} alt={movie.name} className="movieImage" />
                            </a>                         
                        }
                    </div>     
                    <div className="col-md-8">
                        <div><span className="movieField">Name</span>: {movie.name}</div>
                        <div><span className="movieField">Date Watched</span>: {movie.date}</div>
                        {movie.releaseYear !== "" &&
                            <div><span className="movieField">Release Year</span>: {movie.releaseYear}</div>                         
                        }                      
                    </div>  
                </div>            
            </div>
        );
    } 
}