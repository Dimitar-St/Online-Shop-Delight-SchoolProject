class AdminController {
    constructor(userService) {
        this.userService = userService;
    }
    
    getAllUser(req, res) {
        this.userService
            .getAllUsers()
            .then(users => { 
                res.render('./admin/all-users.pug', {
                    users: users,
                    isAuthenticated: req.isAuthenticated(),
                    user: req.user,
                    isAdmin: this.userService.isAdmin(req.user)
                });
            });
    }
}

module.exports = AdminController;