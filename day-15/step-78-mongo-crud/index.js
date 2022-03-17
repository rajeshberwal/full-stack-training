const express = require('express');
const mongoose = require('mongoose');

const app = express();

// middleware
// ---------------------------
app.use(express.static(__dirname + '/public'));
app.use(express.json());

// application configuration
// --------------------------------------
let errorHandler = err => console.log('Error: ', err);

// DB configuration
// ---------------------------
const URI = 'mongodb+srv://irajeshberwal:G4JKMrimflBdLJCw2@mycluster.oad7t.mongodb.net/onlineDB?retryWrites=true&w=majority';

// ORM
let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;
let User = mongoose.model('User', new Schema({
    id: ObjectId,
    username: String,
    useremail: String,
    usercity: String
}));

mongoose.connect(URI)
    .then(() => console.log('DB Connected'))
    .catch(err => errorHandler(err));

// CRUD Routes
// ---------------------------------------------------
app.get('/data', (req, res) => {
    console.log('GET Request for Data Recieved');

    User.find((err, users) => {
        if (err) {
            errorHandler(err);
        } else {
            res.json({
                users
            });
        }
    });
});

app.delete('/delete/:id', (req, res) => {
    User.findByIdAndDelete({
        _id: req.params.id
    }, (err, deletedUser) => {
        if (err) {
            console.log('Error: ', err);
        } else {
            console.log('User got deleted.');
        }
    });
});

// app.get('/edit/:id', (req, res) => {

// })

app.post('/add', (req, res) => {
    // console.log(req.body);
    let user = new User(req.body);
    user
        .save()
        .then(dbRes => {
            res.json({
                "message": "User Added"
            });
        })
        .catch(err => {
            console.log('Error: ', err);
        });
});

app.listen(5050, (err) => {
    if (err) {
        errorHandler(err);
    } else {
        console.log('Server is live on http://localhost:5050');
    }
});