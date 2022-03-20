const express = require('express');
const mongoose = require('mongoose');

const app = express();

// application configuration
// --------------------------------------
let errorHandler = err => console.log('Error: ', err);

// DB configuration
// ---------------------------
const URI = 'mongodb+srv://irajeshberwal:G4JKMrimflBdLJCw2@mycluster.oad7t.mongodb.net/onlineDB?retryWrites=true&w=majority';

// ORM
let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;
let Question = mongoose.model('Question', new Schema({
    id: ObjectId,
    qCategory: String,
    question: String,
    aCategory: String,
    answer1: String,
    answer2: String,
    answer3: String,
    answer4: String
}));

mongoose.connect(URI)
    .then(() => console.log('DB Connected'))
    .catch(err => errorHandler(err));

// middlewares
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({
    extended: false
}));

// Routes
app.get('/', (req, res) => {
    res.render('index.pug');
});

app.get('/dashboard', (req, res) => {
    res.sendFile(__dirname + '/public/dashboard.html');
});

app.post('/dashboard', (req, res) => {
    let question = new Question({
        qCategory: req.body.qCategory,
        question: req.body.question,
        aCategory: req.body.aCategory,
        answer1: req.body['answer-1'],
        answer2: req.body['answer-2'],
        answer3: req.body['answer-3'],
        answer4: req.body['answer-4']
    });

    question
        .save()
        .then(dbRes => {
            res.json({
                "message": "Question Added"
            });
        })
        .catch(err => {
            console.log('Error: ', err);
        });
})

app.listen(5000, () => console.log('Server live on http://localhost:5000'));