
var express = require('express');
var mongodb = require('mongodb');
var passport = require('passport');
var bodyParser = require('body-parser');

require('./config/passport')(passport);

var CharacterController = require('./controllers/characterController');
var AuthController = require('./controllers/authController');

var UserService = require('./services/userService');
var CharacterService = require('./services/characterService');

//SERVICSE
var userService = new UserService(mongodb);
var characterService = new CharacterService(mongodb);

var app = express();

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

//MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Controllers
app.use('api/character', new CharacterController(express()).router);
app.use('/auth', new AuthController(express(), passport).router);

app.get('/', function(req, res) {
    res.send("WORKS");
});


app.listen(8080);
console.log("App listening on port 8080!");
