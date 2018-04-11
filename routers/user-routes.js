const UserController = require('../controllers/user-controller.js'),
      serviceLoader = require('../services/service-loader.js'),
      userService = serviceLoader.getUserService(),
      orderService = serviceLoader.getOrderService();

module.exports = function(router) {
    function isAuthenticated(req, res, next) {
       if (req.isAuthenticated()) {
         next();
       } else {
         res.redirect('/login');
       }
    }
    
    let controller = new UserController(userService, orderService);

    router.get('/:username/profile', isAuthenticated, (req, res) => controller.loadProfilePage(req, res))
          .get('/orders', isAuthenticated, (req, res) => controller.loadOrdersPage(req, res))
          .get('/:username/settings', isAuthenticated, (req, res) => controller.loadSettingsPage(req, res))
          .post('/orders', isAuthenticated, (req, res) => controller.makeOrder(req, res))
          .post('/:username/update/email', isAuthenticated, (req, res) => controller.updateEmail(req, res))
          .post('/:username/update/profileImage', isAuthenticated, (req, res) => controller.updateProfileImage(req, res))
          .post('/:username/update/username', isAuthenticated, (req, res) => controller.updateUsername(req, res));
};