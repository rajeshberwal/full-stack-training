const express = require('express');
const User = require('../models//user.model');
const errorHandler = require('../helpers/errorHandler.helper');

const router = express.Router();


// ------------------------------------
router.get('/data', (req, res) => {
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

router.delete('/delete/:id', (req, res) => {
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

router.get('/edit/:id', (req, res) => {
    User.findById(req.params.id, (err, userToUpdate) => {
        if (err) {
            console.log(`Error: ${err}`);
        } else {
            res.json(userToUpdate);
        }
    })
});

router.post('/edit/:id', (req, res) => {
    User.findById(req.params.id, (err, updateUser) => {
        if (err) {
            console.log(`Error: ${err}`);
        } else {
            updateUser.username = req.body.username;
            updateUser.useremail = req.body.useremail;
            updateUser.usercity = req.body.usercity;

            updateUser
                .save()
                .then(updatedUser => res.json({
                    "updatedUser": updatedUser
                }))
                .catch(err => errorHandler(err))
                .finally();
        }
    });
});

router.post('/add', (req, res) => {
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

module.exports = router;