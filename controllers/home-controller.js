class HomeController {
    constructor() {}
    
    loadHomePage(req, res) {
        res.render('home.pug', {
            isAuthenticated: req.isAuthenticated(),
            user: req.user,
            isAdmin: this.isAdmin(req)
        });
    }
    
    loadForUsPage(req, res) {
        res.render('./shared/for-us.pug', {
            isAuthenticated: req.isAuthenticated(),
            user: req.user,
            isAdmin: this.isAdmin(req)
        });
    }
    
    isAdmin(req) {
        if(req.user != undefined) {
           return req.user.role === 'admin';       
        } else {
            return false;
        }
    }
}

module.exports = HomeController;