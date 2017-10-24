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

        let promise = newUser.save().then(err => {
            if(err) console.log(err);
        });
        
        return promise;
    }
    
    createAdmin(username, email, password, profilePic) {
        let admin = new this.User({
            username: username,
            email: email,
            password: password,
            profilePic: profilePic,
            role: 'admin',
            boughtProducts: [],
            moneyInTheCreditCard: 0,
            shoppingCartProducts: []
         });
        
        let promise = admin.save().then(err => {
            if(err) console.log(err);
        });
        
        return promise;
    }

    findById(id) {
    }
    
    getAllUsers() {
        return this.User.find({}, function(err, data) {
            return Promise.resolve(data);   
        });
    }
    
    isAdmin(user) {
        if(user.role === 'admin') {
           return true;
        }
        
        return false;
    }
}

module.exports = (User) => { 
    return new UserService(User)
};