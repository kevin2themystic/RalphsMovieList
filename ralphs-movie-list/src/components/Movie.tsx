import React from "react";
import { Component } from "react";
import MovieModel from "../models/movie";
import "./Movie.css";

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
                    <div>
                    <div>Name: {movie.name}</div>
                    <div>Date: {movie.date}</div>
                    <div>IMDB Url: {movie.imdbUrl}</div>
                    <div>Thumbnail: {movie.thumbnail}</div>
                    <div>Summary: {movie.summary}</div>
                </div>
            </div>
        );
    } 
}