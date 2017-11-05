const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//mongoose.connect('mongodb://localhost:27017/Shop-Delight');
 mongoose.connect('mongodb://localhost:27017/Shop-Delight', {
  useMongoClient: true,
});

const User = require('../models/user-model')();

class ServiceLoader {
    constructor(userModel) {
        this.userModel = userModel;
    }
    
    getUserService() {
        let UserService = require('./user-service'),
            service = new UserService((this.userModel));
        
        return service;
    }
}

let serviceLoader = new ServiceLoader(User);

module.exports = serviceLoader;
