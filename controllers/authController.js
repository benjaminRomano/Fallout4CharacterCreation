var Controller =  function(router, passport) {
    this.router = router;
    this.passport = passport;
    this.setup();
};

Controller.prototype.setup = function() {
    this.router.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/login');
    });

    this.router.get('/info', function(req, res) {
        res.json({ "user": req.user });
    });

    this.router.get('/login', function(req, res) {
        res.render('login.ejs');
    });

    this.router.get('/google',
        this.passport.authenticate('google', { scope: ['profile', 'email']})
    );

    this.router.get('/google/callback',
        this.passport.authenticate('google', {
            successRedirect: '/',
            failureRedirect: '/login'
        })
    );
};

module.exports = Controller;
