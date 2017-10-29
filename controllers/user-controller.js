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
    
    updateEmail(req, res) {
        let id = req.user.id,
            newEmail = req.body.newEmail;
        
        this.userService.updateEmail(id, newEmail);
        
        res.redirect('/' + req.user.username + '/profile');
    }
    
    updateProfileImage(req, res) {
        let id = req.user.id,
            newImage = req.body.newProfileImage;
        
        this.userService.updateProfileImage(id, newImage);
        
        res.redirect('/' + req.user.username + '/profile');
    }
}

module.exports = UserController;