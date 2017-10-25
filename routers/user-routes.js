const UserController = require('../controllers/user-controller.js'),
      userService = require('../services/service-loader.js').getUserService();

module.exports = function(router) {
    function isAuthenticated(req, res, next) {
       if (req.isAuthenticated()) {
         next();
       } else {
         res.sendStatus(401);
       }
    }
    
    let controller = new UserController(userService);

    router.get('/:username/profile', isAuthenticated, (req, res) => controller.loadProfilePage(req, res));
};