import React from "react";
import { NavLink } from "react-router-dom";

function Menu () {
    return (
        <div className="menu">
            <NavLink to="/movies" className="menu-link btn">Movies</NavLink>
            <NavLink to="/about-ralph" className="menu-link btn">About Ralph</NavLink>
            <NavLink to="/about-ralphs-movie-list" className="menu-link btn">About This Site</NavLink>
        </div>
    );
}

export default Menu;