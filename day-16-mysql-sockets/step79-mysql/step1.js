const mysql = require('mysql');

// -------------------------
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});

connection.connect(err => {
    if (err) {
        console.log('Error', err);
    } else {
        console.log('MySQL connected.');
    }
});