const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.static(__dirname));
app.use(express.static(__dirname + '/public'));

// let clientList = 1;
io.on('connection', socket => {
    console.log('Client Socket Connected');
    socket.emit('serverMessage', 'Client Connected.');
    // clientList++;

    socket.on('disconnection', () => {
        console.log('Client Disconnected.');
    })
});



server.listen(2020, 'localhost', err => {
    if (err) {
        console.log('Error: ', err);
    } else {
        console.log('Server is live on http://localhost:2020');
    }
});