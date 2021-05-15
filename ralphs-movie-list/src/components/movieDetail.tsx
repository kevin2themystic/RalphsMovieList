import React from "react";
import { Component } from "react";
import ralphsMovies from "../services/dataService";
import getIntVarFromPathName from "../utils/uriUtils";


interface MovieDetailState {
    movieNumber: number;
    movieName: string;
    movieDate: string;
    movieDist: string;
    movieNotes: string;
}

class MovieDetail extends Component<{}, MovieDetailState> {

    constructor(props: {})
    {
        super(props); 
        this.state = {
            movieNumber: 0,
            movieName: "",
            movieDate: "",
            movieDist: "",
            movieNotes: ""
        }       
    }

    componentDidMount() {
        let movieNumber = getIntVarFromPathName("/movies/");
        let movie = ralphsMovies.find(movie => movie.number = movieNumber);
        if(movie) {
            this.setState({
                movieNumber: movieNumber,
                movieName: movie.name,
                movieDate: movie.date,
                movieDist: movie.distributor ?? "",
                movieNotes: movie.otherNotes ?? ""
            });            
        }
    }

    render () {
        return (
            <div className="movie-detail-component ">  
                <h3>{this.state.movieName}</h3>
                {/* <div className="row">
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
                </div>             */}
            </div>
        );
    } 
}

export default MovieDetail;