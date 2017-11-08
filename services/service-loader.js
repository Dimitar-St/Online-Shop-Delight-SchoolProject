const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//mongoose.connect('mongodb://localhost:27017/Shop-Delight');
 mongoose.connect('mongodb://localhost:27017/Shop-Delight', {
  useMongoClient: true,
});

const User = require('../models/user-model')(),
      Product = require('../models/product-model')();

class ServiceLoader {
    constructor(userModel, productModel) {
        this.userModel = userModel;
        this.productModel = productModel;
    }
    
    getUserService() {
        let UserService = require('./user-service'),
            service = new UserService((this.userModel));
        
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
