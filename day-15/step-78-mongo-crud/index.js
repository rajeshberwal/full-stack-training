const express = require('express');
const mongoose = require('mongoose');
const errorHandler = require('./helpers/errorHandler.helper');

const config = require('./config.json');
const route = require('./routes/user.routes');

const app = express();

// middleware
// ---------------------------
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(route);

// Mongoose Configuration
mongoose.connect(config.URI)
    .then(() => console.log('DB Connected'))
    .catch(err => errorHandler(err));


app.listen(config.PORT, (err) => {
    if (err) {
        errorHandler(err);
    } else {
        console.log('Server is live on http://localhost:5050');
    }
});