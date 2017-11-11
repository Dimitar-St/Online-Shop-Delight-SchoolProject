const User = require('../models/user-model')(),
      Product = require('../models/product-model')();

class ServiceLoader {
    constructor(userModel, productModel) {
        this.userModel = userModel;
        this.productModel = productModel;
    }
    
    getUserService() {
        let UserService = require('./user-service'),
            bcrypt = require("bcrypt-nodejs"),
            service = new UserService((this.userModel), bcrypt);
        
        return service;
    }
    
    getProductService() {
        let ProductService = require('./products-service'),
            service = new ProductService((this.productModel));
        
        return service;
    }
}

let serviceLoader = new ServiceLoader(User, Product);

module.exports = serviceLoader;
