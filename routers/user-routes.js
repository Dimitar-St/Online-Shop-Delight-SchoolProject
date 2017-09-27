const userController = require('../controllers/user-controller.js');

module.exports = function(router) {
    function isAuthenticated(req, res, next) {
        if (req.isAuthenticated()) {
          next();
        } else {
          res.sendStatus(401);
        }
      }

    router.get('/:username/profile', isAuthenticated, userController.loadProfilePage);
};