
var express = require('express');
var passport = require('passport');
var bodyParser = require('body-parser');
var session = require('express-session');
var db = require('./db');
var authConfig = require('./config/auth');

var UserService = require('./services/userService');
var CharacterService = require('./services/characterService');

var CharacterController = require('./controllers/characterController');
var AuthController = require('./controllers/authController');

db.connect().then(setupServer).catch(function(err) {
    console.log(err.message);
});

function setupServer(db) {
    //Services
    var userService = new UserService(db);
    var characterService = new CharacterService(db);

    var app = express();
    app.set('view engine', 'html');
    app.set('views', require('path').join(__dirname, 'app/views'));
    app.engine('html', require('ejs').renderFile);

    //Middleware
    require('./config/passport')(passport, userService);
    app.use(express.static('app'));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(session({ secret: authConfig.sessionSecret, resave: false, saveUninitialized: true }));
    app.use(bodyParser.json());
    app.use(passport.initialize());
    app.use(passport.session());

    //Controllers
    app.use('api/character', new CharacterController(express()).router);
    app.use('/auth', new AuthController(express(), passport).router);

    app.get('/', loggedIn, function(req, res) {
        res.redirect('/characterCreator');
    });

    app.get('/characterCreator', loggedIn, function(req, res) {
        res.render('app.html');
    });

    app.listen(8080);
    console.log('App listening on port 8080');
}


function loggedIn(req, res, next) {
    if(req.user) {
        return next();
    }

    res.redirect('/auth/login');
}
