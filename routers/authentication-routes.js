const authenticationController = require('../controllers/authentication-controller.js'),
      passport = require('passport');

module.exports = function(router) {
    router.get('/login', authenticationController.loadLoginPage)
          .get('/register', authenticationController.loadRegisterPage)
          .post('/register', authenticationController.register)
          .post('/login', passport.authenticate('local', 
                                                { successRedirect: '/',
                                                    failureRedirect: '/login',
                                                    failureFlash: true
                                                }), 
                                                authenticationController.login);
};