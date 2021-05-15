import Axios from "axios";
import constants from "../constants.json";

function getMovie() {

}
function loadMovies() {
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


function getIMDBUrl(movieId: string) {
    return constants.IMDB.MovieTitleUrl + movieId;
}

function getSearchMovieUrl(movieName: string) {
    return constants.IMDB.APIs.SearchMovie + constants.IMDB.APIKey + "/" + movieName;
}

export default {
    getMovie
};