//const HomeController = require('../controllers/home-controller.js');
//
//module.exports = function(router) {
//    router.get('/', homeController.loadHomePage);
//};

class HomeRoutes {
    constructor(router, controller) 
    {
        this.router = router;
        this.controller = controller;
    }
    
    get router() {
        return this._router;
    }
    
    set router(value) {
        if(value === null || value === undefined) {
           throw 'The passed router is invalid.';
        }
        
        this._router = value;
    }
    
    loadRoutes() {
        this.router
            .get('/', this.controller.loadHomePage);
    }
}

module.exports = HomeRoutes;