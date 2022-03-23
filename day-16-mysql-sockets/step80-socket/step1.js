const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', socket => {
    console.log('Client Socket Connected');
    socket.emit('message', 'Hello From Socket.io.');
});

io.on('disconnect', () => {
    console.log('Client Socket Disconnected');
});

app.use(express.static(__dirname));

server.listen(6060, 'localhost', err => {
    if (err) {
        console.log('Error: ', err);
    } else {
        console.log('Server is live on http://localhost:6060');
    }
});