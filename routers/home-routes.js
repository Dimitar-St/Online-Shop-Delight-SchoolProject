const HomeController = require('../controllers/home-controller.js');

module.exports = function(router) {
      let controller = new HomeController();
    
      router.get('/', (req, res) => controller.loadHomePage(req, res))
            .get('/for-us', (req, res) => controller.loadForUsPage(req, res));
};
