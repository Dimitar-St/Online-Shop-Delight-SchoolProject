const userService = require('../services/service-loader.js')().userService;

module.exports = {
    loadProfilePage(req, res) {
        console.log(req.user);
        res.render('user/profile-page', {
            isAuthenticated: req.isAuthenticated(),
            user: req.user
        });
    }
}