module.exports = function() {
    const mongoose = require('mongoose');
    mongoose.Promise = global.Promise;
    
    mongoose.connect('mongodb://localhost:27017/Shop-Delight');

    let User = require('../models/user-model')();

    const userService = require('./user-service')(User);

    return {
        userService
    }
};