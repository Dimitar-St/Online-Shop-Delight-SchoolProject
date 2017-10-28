class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    
    loadProfilePage(req, res) {
        res.render('user/profile-page', {
            isAuthenticated: req.isAuthenticated(),
            user: req.user,
            isAdmin: this.userService.isAdmin(req.user)
        });
    }
    
    loadSettingsPage(req, res) {
        res.render('user/user-settings-page', {
            isAuthenticated: req.isAuthenticated(),
            user: req.user,
            isAdmin: this.userService.isAdmin(req.user)
        });
    }
    
    loadOrderPage(req, res) {
    }
}

module.exports = UserController;