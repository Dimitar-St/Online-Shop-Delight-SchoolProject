class AllRoutes {
    constructor(app, router) {
        this.app = app;
        this.router = router;
    }
    
    get app() {
        return this._app;
    }
    
    set app(value) {
        if(value === undefined || value === null || typeof(value) === typeof('st') || typeof(value) === typeof([])) {
           throw 'Invalid app value';
        }
        
        this._app = value;
    }
    
    get router() {
        return this._router;
    }
    
    set router(value) {
        if(value === undefined || value === null || typeof(value) === 'string' || typeof(value) === typeof([])) {
           throw 'Invalid router value';
        }
        
        this._router = value;
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