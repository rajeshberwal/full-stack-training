const express = require('express');

const app = express();

app.get('/', (req, res) => {
    // res.write('hello there');
    // res.end();
    // res.send('Hello from Express.');
    // res.send('<h1>Hello from Express.</h1>');
    res.sendFile(__dirname + '/index.html');
});

app.listen(5000, 'localhost');
console.log('Server is running on http://localhost:5000');