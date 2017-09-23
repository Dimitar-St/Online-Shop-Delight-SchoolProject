const authenticationController = require('../controllers/authentication-controller.js');

module.exports = function(router) {
    router.get('/login', authenticationController.loadLoginPage)
          .get('/register', authenticationController.loadRegisterPage)
          .post('/register', authenticationController.register);
};