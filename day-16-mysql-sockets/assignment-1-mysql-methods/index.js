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
        // 1. Query All Records above 5
        let sql1 = 'SELECT name FROM participant WHERE id > 5';
        connection.query(sql1, (err, res) => {
            if (err) {
                console.log('Error: ', err);
            } else {
                console.log('Records Having id Above 5:');

                res.forEach(record => {
                    console.log(record.name);
                });
            }
        })

        // 2. Query All Records below 5
        let sql2 = 'SELECT name FROM participant WHERE id < 5';
        connection.query(sql2, (err, res) => {
            if (err) {
                console.log('Error: ', err);
            } else {
                console.log('Records Having id Below 5:');

                res.forEach(record => {
                    console.log(record.name);
                });
            }
        });

        // 3. Alternate Records
        // let sql3 = 'SELECT * FROM participant WHERE id % 2 = 1';
        let sql3 = 'SELECT * FROM participant WHERE id % 2 = 0';
        connection.query(sql3, (err, res) => {
            if (err) {
                console.log('Error: ', err);
            } else {
                console.log('Alternate Records:');

                res.forEach(record => {
                    console.log(record.name);
                });
            }
        });

        // 4. VIEWS
        let sql4 = 'CREATE OR REPLACE VIEW Heros AS SELECT name FROM participant';
        connection.query(sql4, (err, res) => {
            if (err) {
                console.log('Error: ', err);
            } else {
                console.log('VIEW: ', res);
            }
        });

        // // 5. Joins
        let sql5 = `SELECT p1.name, p1.email FROM participant as p1 INNER JOIN participant2 as p2 ON p1.name=p2.name`;
        connection.query(sql5, (err, res) => {
            if (err) {
                console.log('Error: ', err);
            } else {
                console.log('VIEW: ', res);
            }
        });
    }
});