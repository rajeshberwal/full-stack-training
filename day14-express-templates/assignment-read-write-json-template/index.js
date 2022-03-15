const express = require('express');
const fs = require('fs');

const app = express();

// express configuration set
// express middleware use
app.use(express.urlencoded({
    extended: false
}));


app.locals.pretty = true;

var herolist = [];

// reading data from json file
fs.readFile('data/heros.json', 'utf-8', function (err, data) {
    if (err) {
        throw err
    }
    // console.log(data);
    let { heros } = JSON.parse(data);
    herolist = heros;
});

app.get('/', (req, res) => {
    res.render('home.pug', {
        companyName: 'iSchoolConnect India',
        registeredUser: true,
        herolist: herolist
    });
});

app.post('/', (req, res) => {
    // res.send('You made a post request.');
    let hero = req.body.nextHero;
    herolist.push(hero);

    // data format to be inserted in json file
    let data = {
        "heros": herolist
    };

    // writing to json file
    fs.writeFile('data/heros.json', JSON.stringify(data), 'utf-8', function (err) {
        if (err) throw err
        console.log('Data Added...')
    })
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