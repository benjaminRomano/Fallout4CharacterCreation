
var uuid = require('node-uuid');
var Q = require('q');

var CharacterDb = function(db) {
    this.collection = db.collection('characters');
};

CharacterDb.prototype.create = function(character) {
    var deferred = Q.defer();

    character.id = uuid.v4();

    this.collection.insertOne(character, function(err) {
        if (err) {
            deferred.reject(err);
            return;
        }

        delete character._id;
        deferred.resolve(character);
    });

    return deferred.promise;
};

CharacterDb.prototype.update = function(character) {
    var deferred = Q.defer();

    this.collection.update({id: character.id}, character, function(err) {
        if (err) {
            deferred.reject(err);
            return;
        }

        delete character._id;
        deferred.resolve(character);
    });

    return deferred.promise;
};

CharacterDb.prototype.getByUser = function(user) {
    var deferred = Q.defer();

    if(!user.characters) {
        deffered.resolve([]);
        return deferred.promise;
    }

    this.collection.find({ id: { $in: user.characters } }).toArray(function(err, characters) {
        if (err) {
            deferred.reject(err);
            return;
        }

        if(!characters) {
            characters = [];
        }

        characters.forEach(function(character) {
            delete character._id;
        });

        deferred.resolve(characters);
    });

    return deferred.promise;
};

CharacterDb.prototype.get = function(id) {
    var deferred = Q.defer();

    this.collection.findOne({ id: id }, function(err, character) {
        if (err) {
            deferred.reject(err);
            return;
        }

        if(character) {
            delete character._id;
        }

        deferred.resolve(character);
    });

    return deferred.promise;
};

module.exports = CharacterDb;
