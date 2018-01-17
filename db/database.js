const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = () => {
  mongoose.connect('mongodb://DimitarStoynaov:3343568mLab@ds259897.mlab.com:59897/naslada', {
    useMongoClient: true,
  });   
}