const express = require('express');

const app = express();

// middlewares
app.use(express.static(__dirname + '/public'));

// Routes
app.get('/', (req, res) => {
    res.render('index.pug');
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard.pug');
});

app.listen(5000, () => console.log('Server live on http://localhost:5000'));