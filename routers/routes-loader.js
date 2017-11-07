class AllRoutes {
    constructor(app, router) {
        this.app = app;
        this.router = router;
    }
    
    load() {
        
        require('./authentication-routes.js')(this.router);
        require('./user-routes.js')(this.router);
        require('./admin-routes.js')(this.router);
        require('./products-routes.js')(this.router);
        require('./home-routes.js')(this.router);
        
        this.app.use(this.router);
    }
}

module.exports = AllRoutes;