import React from "react";
import { Component } from "react";

export default class Footer extends Component {
    render () {
        return (
            <div className="component footer-component">
              <footer className="copywrite">
                  © {new Date().getFullYear()} Kevin Parkinson | Peak Self Living Inc.
              </footer>
            </div>
        );
    } 
}