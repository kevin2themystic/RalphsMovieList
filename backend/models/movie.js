const mongoose = require('mongoose');

const Movie = mongoose.model('Movie', new mongoose.Schema({
    name: { type: String, required: true },
    watchDay: { type: String, required: false },
    watchMonth: { type: String, required: false },
    watchYear: { type: String, required: true },
    distributor: { type: String, required: false },
    otherNotes: { type: String, required: false },
    imdbID: { type: String, required: true },
    watchDay: { type: String, required: false },
}));

exports.Movie = Movie;
