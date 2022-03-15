const express = require('express');
const app = express();

// express configuration set
// express middleware use
app.use(express.urlencoded({
    extended: false
}));


app.locals.pretty = true;

let heros = [];

app.get('/', (req, res) => {
    res.render('home.jade', {
        companyName: 'iSchoolConnect India',
        registeredUser: true,
        heros: heros
    });
});

app.post('/', (req, res) => {
    // res.send('You made a post request.');
    heros.push(req.body.nextHero);
    // console.log(heros);
    res.redirect('/');
});

app.listen(4040, 'localhost', function (error) {
    if (error) {
        console.log('Error: ', error);
    } else {
        console.log('server is now running...');
    }
});