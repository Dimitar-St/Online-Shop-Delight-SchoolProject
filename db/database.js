const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//mongoose.connect('mongodb://localhost:27017/Shop-Delight');
module.exports = () => {
  mongoose.connect('mongodb://localhost:27017/Shop-Delight', {
    useMongoClient: true,
  });   
}