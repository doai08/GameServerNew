const http = require('http');
const server = http.createServer();
const { Server } = require("socket.io");


const io = new Server(server);


io.on('connection', (socket) => {
    console.log('a user connected');
});

server.listen(5555, () => {
    console.log('listening on *:5555');
});