const express = require('express');
const knexfile = require('../knexfile');
const app = express();
const port = 8081;
const knex = require('knex')(require('../knexfile.js')["development"]);

app.get('/', (request, response) => {
    response.send('Application up and running.')
})

app.listen(port, () => {
    console.log(`Your Knex and Express Apps are running successfully`)
})

app.get('/pets', (request, response) => {
    knex('pet')
    .select('*')
    .then(pets => {
        var petNames = pets.map(pet => pet.name)
        response.json(petNames);
    })
})