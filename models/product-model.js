const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        min: 2,
        max: 20
    },
    quantity: {
        type: Number
    },
    weight: {
        type: Number
    },
    price: {
        type: Number,
        min: 0.1,
        max: 500
    }
});

mongoose.model('Product', productSchema);

module.exports = function() {
    return mongoose.model('Product'); 
}