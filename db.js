var MongoClient = require('mongodb').MongoClient;
var dbConfig = require('./config/db');
var Q = require('q');

module.exports = {
    "connect": connect
};

function connect() {
    var deferred = Q.defer();

    var env = process.env.NODE_ENV || 'dev';
    dbConfig = dbConfig[env];

    MongoClient.connect(dbConfig.url, function(err, db) {
        if (err) {
            deferred.reject(err);
        }

        deferred.resolve(db);
    });

    return deferred.promise;
}
