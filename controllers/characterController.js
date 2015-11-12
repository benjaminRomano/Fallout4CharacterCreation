
var Controller =  function(router) {
    this.router = router;
    this.setup();
};

Controller.prototype.setup = function() {
    this.router.post('/get', function(req, res) {
        res.json({ message: "ADDED"});
    });

    this.router.post('/create', function(req, res) {
        res.json({ message: "CREATED"});
    });
};

module.exports = Controller;
