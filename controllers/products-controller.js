class ProductsController {
    constructor(service) {
        this.service = service
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
       return this.service
                  .getAllProducts()
                  .then((allProducts) => {
                      res.render('./shared/menu', {
                          isAuthenticated: req.isAuthenticated(),
                          user: req.user,
                          isAdmin: this.isAdmin(req),
                          products: allProducts
                      });
                  });        
    }
    
    loadAddProductPage(req, res) {
        res.render('./admin/add-product', {
            isAuthenticated: req.isAuthenticated(),
            user: req.user,
            isAdmin: this.isAdmin(req)
        });
    }

    loadRemovePage(req, res) {
        res.render('./admin/remove-product', {
            isAuthenticated: req.isAuthenticated(),
            user: req.user,
            isAdmin: this.isAdmin(req)
        });
    }

    loadOrdersPage(req, res) {
        res.render('./user/order-page', {
            isAuthenticated: req.isAuthenticated(),
            user: req.user,
            isAdmin: this.isAdmin(req)
        });
    }
    
    addProduct(req, res) {
        let name = req.body.name,
            quantity = req.body.quantity,
            weight = req.body.weight,
            price = req.body.price;
        
        this.service.addProduct(name, quantity, weight, price);

        res.render('./admin/add-product', {
            isAuthenticated: req.isAuthenticated(),
            user: req.user,
            isAdmin: this.isAdmin(req),
            message: {
                success: 'Продукта беше добавен успешно'
            }
        });
    }

    removeProduct(req, res) {
        let name = req.body.name,
            message = { };

        return this.service
                   .removeProduct(name)
                   .then((product) => {
                        if(product === null) {
                            message.error = 'Възникна проблем при премахването на продукта.';
                        } else {
                            message.success = 'Продукта е премахнат успешно.';
                        }

                        res.render('./admin/remove-product.pug', {
                           isAuthenticated: req.isAuthenticated(),
                           user: req.user,
                           isAdmin: this.isAdmin(req),
                           message: message
                        });
                     
                   });
    }
    
    isAdmin(req) {
        if(req.user !== undefined) {
           return req.user.role === 'admin';       
        } else {
            return false;
        }
    }
}

module.exports = ProductsController;