const { Movie } = require('../models/movie');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const movies = ['Lord of the Rings Trilogy', 'The Matrix Trilogy', 'The Thin Red Line'];
    // const movies = await Movie.find().sort('name');
    res.send(movies);
});

router.put('/:id', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const movie = await Movie.findByIdAndUpdate(req.params.id,
        {
            name: req.body.name,
            isGold: req.body.isGold,
            phone: req.body.phone
        }, { new: true });

    if (!movie) return res.status(404).send('The Movie with the given ID was not found.');

    res.send(movie);
});

module.exports = router;