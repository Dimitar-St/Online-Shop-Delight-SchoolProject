const AuthenticationController = require('../controllers/authentication-controller.js'),
      userService = require('../services/service-loader.js').getUserService();
      passport = require('passport');

module.exports = function(router) {
    let controller = new AuthenticationController(userService);
    
    router.get('/login', (req, res) => controller.loadLoginPage(req, res))
          .get('/register', (req, res) => controller.loadRegisterPage(req, res))
          .get('/logout', (req, res) => controller.logout(req, res))
          .post('/register', (req, res) => controller.register(req, res))
          .post('/login', passport.authenticate('local', 
                                                { 
                                                    successRedirect: '/',
                                                    failureRedirect: '/login',
                                                    passReqToCallback: true,
                                                    failureFlash: true
                                                }), 
                                                controller.login);
};