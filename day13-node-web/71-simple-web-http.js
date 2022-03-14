const http = require('http');

let msg = 'Welcome To Your Life.';

let page = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>${msg}</h1>
</body>
</html>`;

let server = http.createServer((req, res) => {
    res.writeHead(200, 'ALL IS WELL', {
        'Content-Type': 'text/html'
    });
    res.write(page);
    res.end();
});

server.listen(5000, 'localhost', err => {
    if (err) {
        console.log(`Error: ${err}`);
    } else {
        console.log('Server listening on http://localhost:5000');
    }
});