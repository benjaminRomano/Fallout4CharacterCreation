
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var configAuth = require('./auth');

module.exports = function(passport, userService) {

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(user, done) {
        done(null, user);
    });

    passport.use(new GoogleStrategy({
        clientID: configAuth.googleAuth.clientID,
        clientSecret: configAuth.googleAuth.clientSecret,
        callbackURL: configAuth.googleAuth.callbackURL
    }, function(token, refreshToken, profile, done) {

        process.nextTick(function() {

            userService.get(profile.id, function(err, user) {
                if (err)
                    return done(err);
                if (user) {
                    return done(null, user);
                }

                var newUser = {
                    id: profile.id,
                    token: token,
                    name: profile.displayName,
                    email: profile.emails[0].value
                };

                userService.save(newUser, function(err, user) {
                    if (err)
                        done(err);
                    return done(null, newUser);
                });
            });
        });

    }));

};
