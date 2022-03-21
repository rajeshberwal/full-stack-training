const express = require('express');
const mongoose = require('mongoose');

const app = express();

// middlewares
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({
    extended: false
}));

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
    questionCode: String,
    aCategory: String,
    answer1: String,
    answer2: String,
    answer3: String,
    answer4: String,
    answer1_Point: String,
    answer2_Point: String,
    answer3_Point: String,
    answer4_Point: String
}));

let User = mongoose.model('User', new Schema({
    id: ObjectId,
    username: String,
    score: Number
}))

mongoose.connect(URI)
    .then(() => console.log('DB Connected'))
    .catch(err => errorHandler(err));


// Routes

// Route: /
// Method: GET
app.get('/', (req, res) => {
    Question
        .find()
        .then(dbres => {
            // console.log(dbres);
            res.render('index.pug', {
                questions: dbres
            });
        })
        .catch(err => {
            console.log('Error: ', err);
        })
        .finally(() => {
            console.log('Promise Completed.');
        });
});

// Route: /
// Method: POST
app.post('/', (req, res) => {
    let {
        uname: username,
        ...scores
    } = req.body;
    // console.log(username);
    // console.log(scores);
    let totalScore = 0;
    for (let score in scores) {
        totalScore += Number.parseInt(scores[score]);
    }
    // console.log(totalScore);

    let user = new User({
        username: username,
        score: totalScore
    });

    user
        .save()
        .then(dbRes => {
            res.redirect('/');
        })
        .catch(err => {
            console.log('Error: ', err);
        });
});

// Route: /dashboard
// Method: GET
app.get('/dashboard', (req, res) => {
    res.sendFile(__dirname + '/public/dashboard.html');
});

// Route: /dashboard
// Method: POST
app.post('/dashboard', (req, res) => {
    let obj = {
        qCategory: req.body.qCategory,
        question: req.body.question,
        aCategory: req.body.aCategory,
        answer1: req.body['answer-1'],
        answer1_Point: req.body['point-1'],
        answer2: req.body['answer-2'],
        answer2_Point: req.body['point-2'],
        questionCode: req.body.questionCode,
    }

    if (obj.aCategory == 4) {
        obj.answer3 = req.body['answer-3'];
        obj.answer3_Point = req.body['point-3'],
            obj.answer4 = req.body['answer-4'],
            obj.answer4_Point = req.body['point-4']
    }

    let question = new Question(obj);

    question
        .save()
        .then(dbRes => {
            res.redirect('/dashboard');
        })
        .catch(err => {
            console.log('Error: ', err);
        });
    // console.log(req.body);
});

// Route: /result
// Method: GET
app.get('/result', (req, res) => {
    User
        .find()
        .then(dbres => {
            // console.log(dbres);
            res.render('result.pug', {
                results: dbres
            });
        })
        .catch(err => {
            console.log('Error: ', err);
        })
        .finally(() => {
            console.log('Promise Completed.');
        });
});

app.listen(5000, () => console.log('Server live on http://localhost:5000'));