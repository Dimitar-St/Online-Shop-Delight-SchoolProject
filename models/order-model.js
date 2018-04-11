const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const orderSchema = new Schema({
    quantity: Number,
    name: String,
    complete: Boolean
});

mongoose.model('Order', orderSchema);

module.exports = function() {
    return mongoose.model('Order'); 
}