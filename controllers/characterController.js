
var CharacterController =  function(router, coreService) {
    this.router = router;
    this.coreService = coreService;
    this.setup();
};

CharacterController.prototype.setup = function() {
    var self = this;

    this.router.get('/:id', function(req, res) {
        if(!req.user) {
            return res.json({ error: 'Not logged in'});
        }

        if(!req.params.id) {
            return res.json({ error: 'Invalid id'});
        }

        self.coreService.getCharacter(req.params.id).then(function(character) {
            if(!character) {
                return res.json({ error: 'Could not find character'});
            }

            return res.json(character);
        }).catch(function(err) {
            return res.json({ error: 'Invalid id'});
        });
    });

    this.router.post('/', function(req, res) {
        if(!req.user) {
            return res.json({ error: 'Not logged in'});
        }

        if(!req.body) {
            return res.json({ error: 'Character impoperly formatted'});
        }

        self.coreService.createCharacter(req.body, req.user.id).then(function(character) {
            return res.json({ character: character });
        }).catch(function(err) {
            return res.json({ error: err.message });
        });
    });

    this.router.put('/', function(req, res) {
        if(!req.user) {
            return res.json({ error: 'Not logged in'});
        }

        if(!req.body || !req.body.id) {
            return res.json({ error: 'Character improperly formatted'});
        }

        self.coreService.updateCharacter(req.body).then(function(character) {
            return res.json({ character: character });
        }).catch(function(err) {
            return res.json({ error: err.message });
        });
    });
};

module.exports = CharacterController;
