class AdminController {
    constructor(userService) {
        this.userService = userService;
    }
    
    getAllUser(req, res) {
     return this.userService
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
    
    editTheGivenUser(req, res) {
       let username = req.params.username;
        
       return this.userService
                  .findByUsername(username)
                  .then((user) => {
                     res.render('./admin/given-user.pug', {
                         isAuthenticated: req.isAuthenticated(),
                         user: user,
                         isAdmin: true
                     }); 
                  });
    }

    addMoney(req, res) {
      let username = req.params.username,
          money = +req.body.money;
      
      return this.userService
                 .findByUsername(username)
                 .then((user) => {
                    this.userService.addMoney(user, money);

                    res.render('./admin/given-user.pug', {
                        isAuthenticated: req.isAuthenticated(),
                        user: user,
                        isAdmin: true,
                        message: {
                            success: 'The money was added successfully'
                        }
                    });
                 });
    }
}

module.exports = AdminController;