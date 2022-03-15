const express = require('express');
const mongoose = require('mongoose');

const app = express();

// sCHEMA
let Schema = mongoose.Schema;
// objectid
let ObjectId = Schema.ObjectId;

let Hero = mongoose.model('Hero', Schema({
    id: ObjectId,
    list: Array
}));

mongoose.connect('mongodb+srv://irajesh:9729300724rK@mycluster.oad7t.mongodb.net/onlineDB?retryWrites=true&w=majority');

app.get('/', (req, res) => {
    Hero
        .find()
        .then(dbres => {
            // console.log(dbres);
            res.render('home.pug', {
                herolist: dbres[0].list
            });
        })
        .catch(err => {
            console.log('Error: ', err);
        })
        .finally(() => {
            console.log('Promise Completed.');
        })
});

app.listen(5050);
console.log('Server is running on http://localhost:5050');