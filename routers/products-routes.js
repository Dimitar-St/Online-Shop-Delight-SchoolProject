const ProductsController = require('../controllers/products-controller.js');

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
    
    let controller = new ProductsController();

    router.get('/menu', (req, res) => controller.loadMenuPage(req, res))
          .get('/menu/add-product', isAdmin, (req, res) => controller.loadAddProductPage(req, res));
};