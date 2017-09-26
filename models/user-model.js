const mongoose = require('mongoose');

var Schema = mongoose.Schema;

    const userSchema = new Schema({
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
    });
    

    mongoose.model('User', userSchema);

module.exports = function() {
    return mongoose.model('User'); 
}