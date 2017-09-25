const mongoose = require('mongoose');

const User = mongoose.model('User', {
    username: {
        type: String,
        min: 6,
        max: 20
    },
    fullName: {
        type: String,
        min: 10,
        max: 30
    },
    password: {
        type: String,
        min: 6,
        max: 16
    },
    email: String,
    role: String,
    boughtProducts: Array,
    moneyInTheCreditCard: Number,
    shoppingCartProducts: Array
})

module.exports = () => { return mongoose.model('User'); }