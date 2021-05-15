import React from "react";
import { Component } from "react";
import ralphsMovies from "../services/dataService";
import { NavLink } from "react-router-dom";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class MoviesList extends Component {
    render () {
        return (
            <div className="component">
                <hr />
                <div>Viewing {ralphsMovies.length} Movies</div>   
                <hr />     
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Watch Date</TableCell>
                                <TableCell>Distributor</TableCell>
                                <TableCell>Other Notes</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>                
                            {ralphsMovies && ralphsMovies.length > 0 
                                          && ralphsMovies.sort((a, b) => a.number > b.number ? 1 : -1)
                                                         .map((movie, idx) => 
                                <TableRow key={movie.number}>
                                    <TableCell component="th" scope="row">                                        
                                        <NavLink to={"/movies/" + movie.number}>{movie.name}</NavLink>
                                    </TableCell>
                                    <TableCell>{movie.date}</TableCell>
                                    <TableCell>{movie.distributor}</TableCell>
                                    <TableCell>{movie.otherNotes}</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>  
            </div>
        );
    } 
}

export default MoviesList;