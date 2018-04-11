class AdminController {
    constructor(userService, offerService, ordersService) {
        this.userService = userService;
        this.offerService = offerService;
        this.ordersService = ordersService;
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
                            success: 'Парите са добавени успешно.'
                        }
                    });
                 });
    }

    loadAddOffer(req, res) {
        res.render('./admin/add-offer.pug', {
                        isAuthenticated: req.isAuthenticated(),
                        user: req.user,
                        isAdmin: true
                    });
    }

    loadOrdersAdminPage(req , res) {
        return this.ordersService
                   .getAllOrders()
                   .then((orders) => {
                        res.render('admin/orders', {
                            isAuthenticated: req.isAuthenticated(),
                            user: req.user,
                            isAdmin: this.userService.isAdmin(req.user),
                            orders: orders
                        });
                   });
    }

    addOffer(req, res) {
        let firstImage = req.body.firstImage,
            secondImage = req.body.secondImage,
            description = req.body.description; 

        this.offerService
            .addOffer(firstImage, secondImage, description)
            .then(() => {
                res.render('./admin/add-offer.pug', {
                        isAuthenticated: req.isAuthenticated(),
                        user: req.user,
                        isAdmin: true,
                        message: {
                            success: 'Офертата е добавена успешно.'
                        }
                    });
            });
    }
}

module.exports = AdminController;