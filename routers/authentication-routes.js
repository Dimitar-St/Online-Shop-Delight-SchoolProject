const AuthenticationController = require('../controllers/authentication-controller.js'),
      userService = require('../services/service-loader.js')().userService,
      passport = require('passport');

module.exports = function(router) {
    let controller = new AuthenticationController(userService);
    
    router.get('/login', controller.loadLoginPage)
          .get('/register', controller.loadRegisterPage)
          .get('/logout', controller.logout)
          .post('/register', controller.register)
          .post('/login', passport.authenticate('local', 
                                                { 
                                                    successRedirect: '/',
                                                    failureRedirect: '/login',
                                                    passReqToCallback: true,
                                                    failureFlash: true
                                                }), 
                                                controller.login);
};