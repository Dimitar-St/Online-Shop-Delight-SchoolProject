const AdminController = require('../controllers/admin-controller.js'),
      serviceLoader = require('../services/service-loader.js'),
      userService = serviceLoader.getUserService(),
      offerService = serviceLoader.getOfferService();

module.exports = function(router) {
    function isAdmin(req, res, next) {
       if (req.isAuthenticated() && req.user.role === 'admin') {
         next();
       } else {
         res.sendStatus(401);
       }
    }
    
    let controller = new AdminController(userService, offerService);
    
    router.get('/admin/edit/users', isAdmin, (req, res) => controller.getAllUser(req, res))
          .get('/admin/edit/:username', isAdmin, (req, res) => controller.editTheGivenUser(req, res))
          .get('/admin/add-offer', isAdmin, (req, res) => controller.loadAddOffer(req, res))
          .post('/admin/add-offer', isAdmin, (req, res) => controller.addOffer(req, res))
          .post('/admin/edit/:username/add-money', isAdmin, (req, res) => controller.addMoney(req, res));
};