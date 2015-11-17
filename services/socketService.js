
var redis = require('socket.io-redis');
var dbConfig = require('../config/db');

var SocketService = function(io) {
    this.io = io;
    this.setup();
    var groups = {};
};

SocketService.prototype.setup = function() {

    this.io.adapter(redis({ host: 'localhost', port: 6379 }));

    this.io.on('connection', function(socket) {
        console.log('connected');

        socket.on('addName', function(name) {
            console.log('Hello,' + name);
            socket.name = name;
        });

        socket.on('joinRoom', function(id){
            if(socket.room) {
                socket.broadcast.to(socket.room).emit('message', socket.name + ' left room');
                console.log('left ' + id);
                socket.leave(socket.room);
            }
            console.log('joined ' + id);
            socket.join(id);
            socket.room = id;
            socket.broadcast.to(socket.room).emit('message', socket.name + ' joined room');
        });

        socket.on('resync', function() {
            socket.broadcast.to(socket.room).emit('resync');
        });

        socket.on('disconnect', function() {
            socket.broadcast.to(socket.room).emit('message', socket.name + ' left room');
            socket.leave(socket.room);
        });
    });
};

module.exports = SocketService;
