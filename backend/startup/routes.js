const express = require('express');
const movies = require('../routes/movies');

module.exports = function (app) {
    app.use(express.json());
    app.use('/api/movies', movies);
}