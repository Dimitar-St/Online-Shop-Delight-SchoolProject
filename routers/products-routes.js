const ProductsController = require('../controllers/products-controller.js'),
      service = require('../services/service-loader').getProductService();

module.exports = function(router) {
    function isAuthenticated(req, res, next) {
       if (req.isAuthenticated()) {
         next();
       } else {
         res.redirect('/login');
       }
    }
    
    function isAdmin(req, res, next) {
       if (req.user.role === 'admin') {
         next();
       } else {
         res.redirect('/', {
              isAuthenticated: req.isAuthenticated(),
              user: req.user,
              message: {
                  error: 'Вие не сте админ и не можете да достъпите тази страница.'
              }
         });
       }
    }
    
    let controller = new ProductsController(service);

    router.get('/menu', (req, res) => controller.loadMenuPage(req, res))
          .get('/menu/add-product', isAdmin, (req, res) => controller.loadAddProductPage(req, res))
          .get('/menu/remove-product', isAdmin, (req, res) => controller.loadRemovePage(req, res))
          .post('/menu/add-product', isAdmin, (req, res) => controller.addProduct(req, res));
};