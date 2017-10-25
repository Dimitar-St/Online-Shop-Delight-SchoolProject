const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/Shop-Delight');

const User = require('../models/user-model')();

class ServiceLoader {
    constructor(userModel) {
        this.userModel = userModel;
    }
    
    getUserService() {
        let userService = require('./user-service')(this.userModel);
        
        return userService;
    }
}

let serviceLoader = new ServiceLoader(User);

module.exports = serviceLoader;
