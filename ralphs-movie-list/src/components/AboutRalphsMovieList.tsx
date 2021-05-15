import React from "react";

function AboutRalphsMovieList () {
    return (
        <div className="component">  
            <h1>About Ralph's Movies List</h1> 
            <div className="row">
                <div className="col-md-12">
                Built using the following technologies
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                <img src="images/icons8-react-100.png" className="tech-image" alt="React JS" />
                </div>
                <div className="col-md-4">
                <img src="images/icons8-typescript-100.png" className="tech-image" alt="Typescript" />
                </div>
                <div className="col-md-4">
                <img src="images/icons8-imdb-100.png" className="tech-image" alt="IMDB API" />
                </div>
            </div>          
        </div>
    );
}

export default AboutRalphsMovieList;