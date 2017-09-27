const authenticationController = require('../controllers/authentication-controller.js'),
      passport = require('passport');

module.exports = function(router) {
    router.get('/login', authenticationController.loadLoginPage)
          .get('/register', authenticationController.loadRegisterPage)
          .get('/logout', authenticationController.logout)
          .post('/register', authenticationController.register)
          .post('/login', passport.authenticate('local', 
                                                { 
                                                    successRedirect: '/',
                                                    failureRedirect: '/login',
                                                    passReqToCallback: true,
                                                    failureFlash: true
                                                }), 
                                                authenticationController.login);
};