const mongoose = require('mongoose'),
      bcrypt = require("bcrypt-nodejs");

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
    profilePic: String,
    email: String,
    role: String,
    boughtProducts: Array,
    moneyInTheCreditCard: Number,
    shoppingCartProducts: Array
});

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}

mongoose.model('User', userSchema);

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = function() {
    return mongoose.model('User'); 
}