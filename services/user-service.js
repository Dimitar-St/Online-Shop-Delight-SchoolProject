const mongoClient = require('./database.js').init();

class UserService {
    constructor(database) {
        this.mongoClient = mongoClient;
    }

    createUser(username, email, password, profilePic) {
       return this.mongoClient
                  .then((db) => {
                    db.collection('users')
                      .save({
                         username: username,
                         email: email,
                         password: password,
                         profilePic: profilePic,
                         boughtProducts: [],
                         moneyInTheCreditCard: 0,
                         shoppingCartProducts: [],
                         isAdmin: false
                      });
                  });
    }
}

const userService = new UserService(mongoClient);

module.exports = userService;