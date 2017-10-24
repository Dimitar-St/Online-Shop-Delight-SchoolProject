const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/Shop-Delight');

module.exports = function() {
    let User = require('../models/user-model')();

    const userService = require('./user-service')(User);

    return {
        userService
    }
};