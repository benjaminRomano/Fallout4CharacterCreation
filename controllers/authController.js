var AuthController =  function(router, passport, coreService) {
    this.router = router;
    this.coreService = coreService;
    this.passport = passport;
    this.setup();
};

AuthController.prototype.setup = function() {

    //Settings aren't inherited, so you need to set them again...
    this.router.set('view engine', 'html');
    this.router.set('views', require('path').join(__dirname, '/../app/views'));
    this.router.engine('html', require('ejs').renderFile);

    var self = this;

    this.router.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/auth/login');
    });

    this.router.post('/permissions', function(req, res) {
        if(!req.user) {
            return res.json({ error: 'Not logged in'});
        }

        if(!req.body || !req.body.id || !req.body.email) {
            return res.json({ error: 'Request improperly formatted' });
        }

        self.coreService.addCharacterByEmail(req.body.id, req.body.email).then(function() {
            return res.json({});
        }).catch(function(err) {
            return res.json({ error: err.message });
        });
    });

    this.router.get('/info', function(req, res) {
        if(!req.user) {
            return res.json({ error: 'Not logged in'});
        }

        self.coreService.getUserInfo(req.user.id).then(function(userInfo) {
            return res.json(userInfo);
        }).catch(function(err) {
            res.json({ error: err.message });
        });
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

module.exports = AuthController;
