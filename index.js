const http = require('http');

const { Server } = require("socket.io");

const server = http.createServer().listen(5555, () => {
    console.log('listening on *:5555');
});

const io = new Server(server);
io.on('connection',(socket)=>{
    console.log("connec");
    socket.on('xinchao',()=>{
        console.log('xinchao');
    });
});