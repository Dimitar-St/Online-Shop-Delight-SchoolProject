const userService = require('../services/service-loader.js')().userService;

module.exports = {
    loadLoginPage(req, res) {
        res.render('./user/login-page');
    },

    loadRegisterPage(req, res) {
        res.render('./user/register-page');
    },

    register(req, res) {
        const username = req.body.username,
              password = req.body.password,
              email = req.body.email,
              profilePicture = req.body.urlProfilePicture;


        userService.createUser(username, email, password, profilePicture);

        res.redirect('/login');
    },

    login(req, res) {
        res.render('home-page', {
            message: req.flash()
        });
    },

    logout(req, res) {
        req.logout();
        res.redirect('/');

        console.log(req.isAuthenticated());
    }
};