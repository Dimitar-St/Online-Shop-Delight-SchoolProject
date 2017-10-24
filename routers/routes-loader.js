//const { Router } = require('express');
//
//module.exports = function(app) {
//    let router = new Router();
//
//    require('./home-routes.js')(router);
//    require('./authentication-routes.js')(router);
//    require('./user-routes.js')(router);
//    
//
//    app.use(router);
//};

const HomeRoutes = require('./home-routes.js'),
      HomeController = require('../controllers/home-controller.js');

class AllRoutes {
    constructor(app, router) {
        this.app = app;
        this.router = router;
    }
    
    load() {
        let homeController = new HomeController();
        
        let homeRoute = new HomeRoutes(this.router, homeController);
        
        require('./authentication-routes.js')(this.router);
        require('./user-routes.js')(this.router);
        require('./admin-routes.js')(this.router);
        
        homeRoute.loadRoutes();
        
        this.app.use(this.router);
    }
}

module.exports = AllRoutes;