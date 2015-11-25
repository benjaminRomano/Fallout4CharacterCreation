
var express = require('express');
var passport = require('passport');
var bodyParser = require('body-parser');
var session = require('express-session');
var redis = require('redis').createClient();
var cookieParser = require('cookie-parser');
var RedisStore = require('connect-redis')(session);
var socketioRedis = require('passport-socketio-redis');
var db = require('./db');
var dbConfig = require('./config/db');
dbConfig = dbConfig[process.env.NODE_ENV || 'dev'];
var authConfig = require('./config/auth');


var UserDb = require('./dbs/userDb');
var CharacterDb = require('./dbs/characterDb');

var CoreService = require('./services/coreService');
var SocketService = require('./services/socketService');

var CharacterController = require('./controllers/characterController');
var AuthController = require('./controllers/authController');




db.connect().then(setupServer).catch(function(err) {
    console.log(err.message);
});

function setupServer(db) {
    //Dbs
    var userDb = new UserDb(db);
    var characterDb = new CharacterDb(db);

    //Services
    var coreService = new CoreService(userDb, characterDb);

    var app = express();

    var http = require('http').Server(app);
    var io = require('socket.io')(http);
    var socketService = new SocketService(io);

    app.set('view engine', 'html');
    app.set('views', require('path').join(__dirname, 'app/views'));
    app.engine('html', require('ejs').renderFile);

    //Middleware
    require('./config/passport')(passport, coreService);
    app.use(express.static('app'));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(session({ 
        secret: authConfig.sessionSecret,
        key: 'connect.sid',
        resave: true,
        saveUninitialized: false,
        store: new RedisStore({
            host: dbConfig.redisHost,
            port: dbConfig.redisPort,
            client: redis
        })
    }));
    
    io.use(socketioRedis.authorize({
        passport:passport,
        cookieParser: cookieParser,
        key:         'connect.sid',       
        secret:      authConfig.sessionSecret,    
        store:       new RedisStore({ 
            host: dbConfig.redisHost,
            port: dbConfig.redisPort,
            client: redis })
    }));
    
    app.use(bodyParser.json());
    app.use(passport.initialize());
    app.use(passport.session());

    //Controllers
    app.use('/api/character', new CharacterController(express(), coreService).router);
    app.use('/auth', new AuthController(express(), passport, coreService).router);

    app.get('/', loggedIn, function(req, res) {
        res.redirect('/characterCreator');
    });

    app.get('/characterCreator', loggedIn, function(req, res) {
        res.render('app.html');
    });
    
    
    var port = 8080;
    http.listen(port, function(){
        console.log('App listening on port ' + port);
    });
}


function loggedIn(req, res, next) {
    if(req.user) {
        return next();
    }

    res.redirect('/auth/login');
}
