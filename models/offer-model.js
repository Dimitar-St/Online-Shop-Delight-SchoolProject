const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const offersSchema = new Schema({
    firstImage: {
        type: String,
    },
    secondImage: {
        type: String,
    }
});

mongoose.model('Offer', offersSchema);

module.exports = function() {
    return mongoose.model('Offer'); 
}