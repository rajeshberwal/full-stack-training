const express = require('express');
const errorHandler = require('../helpers/errorHandler.helper');
const mysql = require('mysql');
const config = require('../config.json');

const router = express.Router();

// ------------------------------------
// MySQL Configuration
let connection = mysql.createConnection({
    host: config.HOST,
    database: config.DATABASE,
    user: config.USER,
    password: config.PASSWORD,
});


// ------------------------------------
router.get('/data', (req, res) => {
    console.log('GET Request for Data Recieved');

    let query = 'SELECT * FROM heros'
    connection.query(query, (err, users) => {
        if (err) {
            errorHandler(err);
        } else {
            res.json({
                users
            })
        }
    })
});

router.delete('/delete/:id', (req, res) => {
    let sql = `DELETE FROM heros WHERE id = ${req.params.id}`

    connection.query(sql, (err, data) => {
        if (err) {
            console.log('Error: ', err);
        } else {
            console.log('User Got Deleted');
        }
    });
});

router.get('/edit/:id', (req, res) => {
    let sql = `SELECT * FROM heros WHERE id = ${req.params.id}`

    connection.query(sql, (err, userToUpdate) => {
        if (err) {
            console.log('Error: ', err);
        } else {
            // console.log(userToUpdate[0].id);
            res.json(userToUpdate[0]);
        }
    });
});

router.post('/edit/:id', (req, res) => {
    username = req.body.username;
    useremail = req.body.useremail;
    usercity = req.body.usercity;

    let sql = `UPDATE heros SET username='${username}', usercity='${usercity}', useremail='${useremail}' WHERE id = ${req.params.id}`

    connection.query(sql, (err, data) => {
        if (err) {
            console.log('Error: ', err);
        } else {
            console.log('User Updated.');
        }
    });
});

router.post('/add', (req, res) => {
    // console.log(req.body);
    let username = req.body.username;
    let usercity = req.body.usercity;
    let useremail = req.body.useremail;

    let sql = `INSERT INTO heros (username, usercity, useremail) VALUES ('${username}', '${usercity}', '${useremail}')`
    connection.query(sql, (err, data) => {
        if (err) {
            console.log('Error: ', err);
        } else {
            console.log('Data Added');
        }
    });
});

module.exports = router;