const mysql = require('mysql');

// -------------------------
let connection = mysql.createConnection({
    host: 'localhost',
    database: 'ischooldb',
    user: 'root',
    password: ''
});

connection.connect(err => {
    if (err) {
        console.log('Error', err);
    } else {
        // Step 1: Connect to Database
        // console.log('MySQL connected.');


        // Step 2: Create a Database
        // connection.query("CREATE DATABASE ischooldb", (err, res) => {
        //     if (err) {
        //         console.log('Error: ', err);
        //     } else {
        //         console.log('Result: ', res);
        //     }
        // })

        // Step 3: Create a Table
        // let sql = `CREATE TABLE participant (
        //     id INT AUTO_INCREMENT PRIMARY KEY,
        //     name VARCHAR(255),
        //     email VARCHAR(300)
        //     )`;
        // connection.query(sql, (err, res) => {
        //     if (err) {
        //         console.log('Error: ', err);
        //     } else {
        //         console.log('Result: ', res);
        //     }
        // });

        // Step 4: Inset values into Database
        // let sql = `INSERT INTO participant (name, email) VALUES ('Rajesh', 'irajeshberwal@gmail.com')`;

        // connection.query(sql, (err, res) => {
        //     if (err) {
        //         console.log('Error: ', err);
        //     } else {
        //         console.log('Result: ', res);
        //     }
        // });

        // Step X: Remove a Database
        // connection.query("DROP DATABASE ischooldb", (err, res) => {
        //     if (err) {
        //         console.log('Error: ', err);
        //     } else {
        //         console.log('Result: ', res);
        //     }
        // })

        // Step 5: Inserting mulitple values
        // let heros = [
        //     ['Clark', 'clark@kent.com'],
        //     ['Beuce', 'bruce@wayne.com'],
        //     ['Peter', 'peter@parker.com']
        // ];

        // let sql = 'INSERT INTO participant (name, email) VALUES ?';

        // Step 6: Inserting Mulitple Values
        // let sql = 'INSERT INTO participant (name, email) VALUES ('name', 'email), ('name2', 'email2)';

        // connection.query(sql, [heros], (err, res) => {
        //     if (err) {
        //         console.log('Error: ', err);
        //     } else {
        //         console.log('Response: ', res);
        //     }
        // })

        // Step 7: Query All Data From Database
        // let sql = 'SELECT * FROM participant';

        // Step 8: Query Name of id 1
        let sql = 'SELECT name FROM participant WHERE id = 1';
        connection.query(sql, (err, res) => {
            if (err) {
                console.log('Error: ', err);
            } else {
                console.log('Response: ', res);

                // res.forEach(record => {
                //     console.log(record.name);
                // });
            }
        })
    }
});

/*
Query All Records above 5
Query All Records below 5
Query alternate records
join
views

Create a CRUD Application with mysql
*/