const express = require('express');
const errorHandler = require('./helpers/errorHandler.helper');

const config = require('./config.json');
const route = require('./routes/user.routes');

const app = express();

// middleware
// ---------------------------
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(route);


app.listen(config.PORT, (err) => {
    if (err) {
        errorHandler(err);
    } else {
        console.log('Server is live on http://localhost:5000');
    }
});