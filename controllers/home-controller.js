class HomeController {
    constructor() {}
    
    loadHomePage(req, res) {
        let isAdmin;
        
        if(req.user != undefined) {
           isAdmin = req.user.role === 'admin';       
        }
        
        res.render('home.pug', {
            isAuthenticated: req.isAuthenticated(),
            user: req.user,
            isAdmin: isAdmin
        });
    }
}

module.exports = HomeController;