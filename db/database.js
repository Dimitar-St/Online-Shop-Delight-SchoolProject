const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = () => {
  mongoose.connect(process.env.MONGODB_URI, {
    useMongoClient: true,
  }, function (err, res) {
    if (err) {
    console.log ('ERROR connecting to: ' + process.env.MONGODB_URI + '. ' + err);
    } else {
    console.log ('Succeeded connected to: ' + process.env.MONGODB_URI);
    }
  });   
}