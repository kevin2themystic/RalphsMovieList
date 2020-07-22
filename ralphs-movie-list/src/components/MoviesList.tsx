// iport react
import React from "react";
import { Component } from "react";

// 3rd party libs
import Axios from "axios";
import $ from "jquery";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

// custome components
import Movie from "./Movie";

// customer models
import MovieModel from "../models/MovieModel";
import { IMDBMovie } from "../models/IMDBMoviewResults";

// constants
import constants from "../constants.json";

// CSS
import "./MoviesList.css";

interface MoviesListProps {
    Movies: MovieModel[]
}

interface MoviesListState {
    Movies: MovieModel[];
    imdbMaxUsageExceeded: boolean;
    userErrorMessage: string;
}

export default class MoviesList extends Component<MoviesListProps, MoviesListState> {

    constructor(props: MoviesListProps) {
        super(props);
        this.state = {
            imdbMaxUsageExceeded: false,
            Movies: [],
            userErrorMessage: "",
        }
    }

    componentDidMount() {
        this.loadMovies();
    }

    render () {
        return (
            <div className="component">
                <hr />
                <div>Total Movies:  {this.state.Movies.length}</div>
                {this.state && this.state.userErrorMessage !== "" &&
                    <div className="errorMessage">{this.state.userErrorMessage}</div>                
                }     
                <hr />  
                <div className="row sortMenu">
                    <div className="col-md-4">
                        <button className="btn btn-primary">View All Movies in Watched Order</button>
                    </div>
                    <div className="col-md-4">
                        <InputLabel id="demo-simple-select-helper-label">View All Movies In Year</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={0}
                            onChange={ (e) => this.handleYearChange(e) }
                        >
                            <MenuItem value="0">
                                <em>All</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </div>
                    <div className="col-md-4">
                        <button className="btn btn-primary">View All Movies in Alphabetical Order</button>
                    </div>
                </div>         
                {this.state && this.state.Movies && this.state.Movies.length > 0 && this.state.Movies.sort((a, b) => a.number > b.number ? 1 : -1).map((m, idx) => 
                    <Movie key={idx} MovieModel={m} />
                )}
                
            </div>
        );
    } 

    loadMovies = () => {
        for(var m = 0; m < this.props.Movies.length; m++) {
            let theMovie = this.props.Movies[m];
            let url = this.getSearchMovieUrl(theMovie.name);
            if(!this.state.imdbMaxUsageExceeded) {
                Axios.get(url)
                .then((response) => {
                    if(response.data.errorMessage.indexOf(constants.ErrorMessages.MaximumUsageError) > -1) {
                        this.setState(
                            {
                                imdbMaxUsageExceeded: true,
                                userErrorMessage: constants.ErrorMessages.MaximumUsageExceeded
                            }
                        );
                    }
                    if(!this.state.imdbMaxUsageExceeded) {
                        if(response.data) {
                            let movieDetails = null;
                            if(theMovie.id === "")
                                movieDetails = response.data.results[0];
                            else
                                movieDetails = $.grep(response.data.results, function(obj: IMDBMovie){return obj.id === theMovie.id;})[0];
                            if(movieDetails) {
                                theMovie.imdbUrl = this.getIMDBUrl(movieDetails.id);
                                theMovie.thumbnail = movieDetails.image;
                                theMovie.summary = movieDetails.description; 
                                theMovie.releaseYear = movieDetails.description;  
                                this.setState(prevState => ({
                                    Movies: [...prevState.Movies, theMovie]
                                }))
                            }
                        }
                    }
                    else {
                        theMovie.thumbnail = constants.Images.ImageUnavailable;
                        this.setState(prevState => ({
                            Movies: [...prevState.Movies, theMovie]
                        }))
                    }
                })
                .catch(function (error) {
                    console.log("ERROR", error);
                });
            }
            else {
                theMovie.thumbnail = constants.Images.ImageUnavailable;
                this.setState(prevState => ({
                    Movies: [...prevState.Movies, theMovie]
                }))
            }
        }
    }

    addMovieToStateFrom = () => {

    }

    getIMDBUrl = (movieId: string) => {
        return constants.IMDB.MovieTitleUrl + movieId;
    }

    getSearchMovieUrl = (movieName: string) => {
        return constants.IMDB.APIs.SearchMovie + constants.IMDB.APIKey + "/" + movieName;
    }

    handleYearChange = (event: React.ChangeEvent<any>) => {
        console.log("handling year change", event.target.value);
    };
}