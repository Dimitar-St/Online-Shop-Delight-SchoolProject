class ProductsController {
    constructor() {
        //this.service = service
    }
    
    get service() {
        return this._service;
    }
    
    set service(value) {
        if (value === undefined || value === null || value === NaN) {
            throw 'Invalid service.';
        }
        
        this._service = value;
    }
    
    loadMenuPage(req, res) {
        res.render('./shared/menu', {
            isAuthenticated: req.isAuthenticated(),
            user: req.user,
            isAdmin: this.isAdmin(req)
        });
    }
    
    loadAddProductPage(req, res) {
        res.render('./admin/add-product', {
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

module.exports = ProductsController;