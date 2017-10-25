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
            .get('/', (req, res) => this.controller.loadHomePage(req, res))
            .get('/for-us', (req, res) => this.controller.loadForUsPage(req, res));
    }
}

module.exports = HomeRoutes;