const User = require('../models/user-model')();

class UserService {
    constructor(model) {
        this.User = model;
    }

    createUser(username, email, password, profilePic) {
        let newUser = new this.User({
            username: username,
            email: email,
            password: password,
            profilePic: profilePic,
            role: 'user',
            boughtProducts: [],
            moneyInTheCreditCard: 0,
            shoppingCartProducts: []
         });

        return Promise.resolve(newUser.save());
    }

    findById(id) {
       /* const searchedUserId = new ObjectID(id);

        mongoClient.then((db) => {
            db.collection('users')
              .findOne({ _id: searchedUserId})
              .then((user) => {
                return user;
              });
        });*/
    }
}

module.exports = (User) => { return new UserService(User) };