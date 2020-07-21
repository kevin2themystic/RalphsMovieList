import React from "react";
import { Component } from "react";
import Movie from "./Movie";
import MovieModel from "../models/movie";
//import constants from "../constants.json";
import "./MoviesList.css";

interface MoviesListProps {
    Movies: MovieModel[]
}

interface MoviesListState {
    Movies: MovieModel[]
}

export default class MoviesList extends Component<MoviesListProps, MoviesListState> {
    render () {
        return (
            <div className="component">
                {this.props && this.props.Movies && this.props.Movies.map((m, idx) => 
                    <Movie key={idx} MovieModel={m} />
                )}
            </div>
        );
    } 
}