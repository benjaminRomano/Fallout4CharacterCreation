
var express = require('express');
var passport = require('passport');
var bodyParser = require('body-parser');
var session = require('express-session');
var db = require('./db');
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
    app.use(session({ secret: authConfig.sessionSecret, resave: false, saveUninitialized: true }));
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

    http.listen(8080, function(){
        console.log('App listening on port 8080');
    });
}


function loggedIn(req, res, next) {
    if(req.user) {
        return next();
    }

    res.redirect('/auth/login');
}
