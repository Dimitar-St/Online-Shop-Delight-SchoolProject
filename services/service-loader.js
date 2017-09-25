const mongoose = require('mongoose');

module.exports = function() {
    mongoose.connect('mongodb://localhost:27017/Shop-Delight');

    let User = require('../models/user-model')();

    const userService = require('./user-service')(User);

    return {
        userService
    }
};