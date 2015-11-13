var Q = require('q');

var UserDb = function(db) {
    this.collection = db.collection('users');
};

UserDb.prototype.create = function(user) {
    var deferred = Q.defer();

    this.collection.insertOne(user, function(err) {
        if (err) {
            deferred.reject(err);
            return;
        }

        delete user._id;
        deferred.resolve(user);
    });

    return deferred.promise;
};

UserDb.prototype.addCharacterById = function(characterId, userId) {
    var self = this;
    return this.get(userId).then(function(user) {
        user.characters.push(characterId);
        return self.update(user).then(function(user) {
            return user;
        });
    });
};

UserDb.prototype.addCharacterByEmail = function(characterId, email) {
    var self = this;
    return this.getByEmail(email).then(function(user) {
        if(user) {

            //Verify user doesn't already character
            for(var i = 0; i < user.characters; i++) {
                if(user.characters[i].id === characterId) {
                    return user;
                }
            }

            user.characters.push(characterId);
            return self.update(user);
        }

        return self.createUser({
            email: email,
            characters: [characterId]
        });
    });
};

UserDb.prototype.update = function(user) {
    var deferred = Q.defer();

    this.collection.update({id: user.id}, user, function(err) {
        if (err) {
            deferred.reject(err);
            return;
        }

        delete user._id;
        deferred.resolve(user);
    });

    return deferred.promise;
};

UserDb.prototype.get = function(id) {
    var deferred = Q.defer();

    this.collection.findOne({ id: id }, function(err, user) {
        if (err) {
            deferred.reject(err);
            return;
        }

        if(user) {
            delete user._id;
        }

        deferred.resolve(user);
    });

    return deferred.promise;
};

UserDb.prototype.getByEmail = function(email) {
    var deferred = Q.defer();

    this.collection.findOne({ email: email }, function(err, user) {
        if (err) {
            deferred.reject(err);
            return;
        }

        if(user) {
            delete user._id;
        }

        deferred.resolve(user);
    });

    return deferred.promise;
};


module.exports = UserDb;
