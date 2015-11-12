var Q = require('q');

var UserService = function(db) {
    this.db = db;
    this.collection = db.collection('users');
};

UserService.prototype.create = function(user) {
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

UserService.prototype.update = function(user) {
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

UserService.prototype.get = function(id) {
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

module.exports = UserService;
