
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var authConfig = require('./auth');

module.exports = function(passport, coreService) {

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        coreService.getUser(id).then(function(user) {
            done(null, user);
        }).catch(function(err){
            done(err);
        });
    });

    passport.use(new GoogleStrategy({
        clientID: authConfig.googleAuth.clientID,
        clientSecret: authConfig.googleAuth.clientSecret,
        callbackURL: authConfig.googleAuth.callbackURL
    }, function(token, refreshToken, profile, done) {

        process.nextTick(function() {
            coreService.getUser(profile.id).then(function(user){
                if(user) {
                    return done(null, user);
                }

                var newUser = {
                    id: profile.id,
                    token: token,
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    characters: []
                };

                coreService.createUser(newUser).then(function(user) {
                    return done(null, user);
                });
            }).catch(function(err) {
                done(err);
            });
        });

    }));

};
