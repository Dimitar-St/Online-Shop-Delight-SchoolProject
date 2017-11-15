const AdminController = require('../controllers/admin-controller.js'),
      userService = require('../services/service-loader.js').getUserService();

module.exports = function(router) {
    function isAdmin(req, res, next) {
       if (req.isAuthenticated() && req.user.role === 'admin') {
         next();
       } else {
         res.sendStatus(401);
       }
    }
    
    let controller = new AdminController(userService);
    
    router.get('/admin/edit/users', isAdmin, (req, res) => controller.getAllUser(req, res))
          .get('/admin/edit/:username', isAdmin, (req, res) => controller.editTheGivenUser(req, res));
};