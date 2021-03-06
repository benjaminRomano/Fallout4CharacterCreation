
var redis = require('socket.io-redis');
var dbConfig = require('../config/db');

var SocketService = function(io) {
    this.io = io;
    this.setup();
    var groups = {};
};

SocketService.prototype.setup = function() {
    
    var env = process.env.NODE_ENV || 'dev';
    dbConfig = dbConfig[env];
    
    this.io.adapter(redis({ host: dbConfig.redisHost, port: dbConfig.redisPort }));

    var self = this;
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

        socket.on('message-sent', function(message) {
            self.io.emit('message-received', message);
        });
    });
};

module.exports = SocketService;
