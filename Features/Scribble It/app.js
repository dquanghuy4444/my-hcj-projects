const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

var points = [];

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/test.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.emit('init', points);
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        socket.broadcast.emit('chat message', msg);
    });
});

io.on('connection', (socket) => {
    socket.on('board data', (data) => {
        points.push(data);
        socket.broadcast.emit('board data', data);
    });
});

io.on('connection', (socket) => {
    socket.on('clear board', () => {
        points = [];
        socket.broadcast.emit('clear board');
    });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});