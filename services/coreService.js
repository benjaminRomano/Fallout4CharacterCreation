var nodemailer = require("nodemailer");
var ses = require('nodemailer-ses-transport');
var mailConfig = require('../config/mail.json');

var uuid = require('node-uuid');

var CoreService = function(userDb, characterDb, socketService) {
    this.userDb = userDb;
    this.characterDb = characterDb;
};

CoreService.prototype.createCharacter = function(character, userId) {
    var self = this;
    return this.characterDb.create(character).then(function(character) {
        return self.userDb.addCharacterById(character.id, userId).then(function(user) {
            return character;
        });
    });
};

CoreService.prototype.getUserInfo = function(userId) {
    var self = this;
    return this.getUser(userId).then(function(user) {
        return self.getCharactersByUser(user).then(function(characters) {
            return {
                user: user,
                characters: characters
            };
        });
    });
};

CoreService.prototype.updateCharacter = function(character) {
    return this.characterDb.update(character);
};

CoreService.prototype.getCharactersByUser = function(user) {
    return this.characterDb.getByUser(user);
};

CoreService.prototype.getCharacter = function(id) {
    return this.characterDb.get(id);
};

CoreService.prototype.addCharacterById = function(characterId, userId) {
    return this.userDb.addCharacterById(character.id, userId);
};

CoreService.prototype.addCharacterByEmail = function(characterId, email) {
    console.log('sending permission grant email to '+email);
    console.log(mailConfig.region);
    var transporter = nodemailer.createTransport(ses({
        accessKeyId: mailConfig.accessKeyId,
        secretAccessKey: mailConfig.secretAccessKey,
        region : mailConfig.region
    }));
    transporter.sendMail({
        from: mailConfig.from,
        to: email,
        subject: mailConfig.subject,
        text: mailConfig.text+characterId
     }, function(error, response){  //callback
            if(error){
                    console.log(error);
            }else{
                    console.log("Message sent: " + response.message);
            }
            transporter.close();
    });
    return this.userDb.addCharacterByEmail(characterId, email);
};

CoreService.prototype.updateCharacter = function(character) {
    return this.characterDb.update(character);
};

//User might have already been created by granting permissions.
CoreService.prototype.createUser = function(user) {
    var self = this;
    return this.userDb.getByEmail(user.email).then(function(existingUser) {
        if(!existingUser) {
            return self.userDb.create(user);
        }

        for(var prop in user) {
            if(user.hasOwnProperty(prop)) {
                existingUser[prop] = user[prop];
            }
        }

        return self.userDb.update(existingUser);
    });
};

CoreService.prototype.updateUser = function(user) {
    return this.userDb.update(user);
};

CoreService.prototype.getUser = function(user) {
    return this.userDb.get(user);
};

CoreService.prototype.getUserByEmail = function(email) {
    return this.userDb.getByEmail(email);
};

module.exports = CoreService;
