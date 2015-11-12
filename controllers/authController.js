var Controller =  function(router, passport) {
    this.router = router;
    this.passport = passport;
    this.setup();
};

Controller.prototype.setup = function() {

    //Settings aren't inherited, so you need to set them again...
    this.router.set('view engine', 'html');
    this.router.set('views', require('path').join(__dirname, '/../app/views'));
    this.router.engine('html', require('ejs').renderFile);

    this.router.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/login');
    });

    this.router.get('/info', function(req, res) {
        res.json({ "user": req.user });
    });

    this.router.get('/login', function(req, res) {
        if(req.user) {
            res.redirect('/characterCreator');
            return;
        }

        res.render('login.html');
    });

    this.router.get('/google',
        this.passport.authenticate('google', { scope: ['profile', 'email']})
    );

    this.router.get('/google/callback',
        this.passport.authenticate('google', {
            successRedirect: '/characterCreator',
            failureRedirect: '/auth/login'
        })
    );
};

module.exports = Controller;
