const User = require('../models/user-model')(),
      Product = require('../models/product-model')(),
      Offer = require('../models/offer-model')(),
      Order = require('../models/order-model')();

class ServiceLoader {
    constructor(userModel, productModel, offerModel, orderModel) {
        this.userModel = userModel;
        this.productModel = productModel;
        this.offerModel = offerModel;
        this.orderModel= orderModel;
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

    getOfferService() {
        let OfferService = require('./offers-service'),
            service = new OfferService(this.offerModel);

        return service;
    }

    getOrderService() {
        let OrderService = require('./order-service'),
            service = new OrderService(this.orderModel);

        return service;
    }
}

let serviceLoader = new ServiceLoader(User, Product, Offer, Order);

module.exports = serviceLoader;
