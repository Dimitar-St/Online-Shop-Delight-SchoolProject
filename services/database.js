const { MongoClient, ObjectID } = require('mongodb'),
       connectionString = 'mongodb://localhost:27017/Shop-Delight';;

const init = () => {
    return MongoClient.connect(connectionString)
        .then((db) => {
            console.log('Databases connected');
            return db;
        });
};

module.exports = { init, ObjectID }
