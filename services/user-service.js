class UserService {
    constructor(model, bcrypt) {
        this.User = model;
        this.bcrypt = bcrypt;
        this.AdminExist = false;
    }

    get AdminExist() {
        return this._isAdminExist;
    }

    set AdminExist(value) {
        this._isAdminExist = value;
    }

    createUser(username, email, password, profilePic) {
        let newUser = new this.User({
            username: username,
            email: email,
            profilePic: profilePic,
            role: 'user',
            boughtProducts: [],
            moneyInTheCreditCard: 0,
            shoppingCartProducts: []
         });
        
        newUser.password = this.bcrypt.hashSync(password, this.bcrypt.genSaltSync(8), null);
        
        let promise = newUser.save().then(err => {
            if(err) console.log(err);
        });

        if(!this.AdminExist) {
            this.createAdmin('Kendal', 'stoyanov.dimi.tr@gmail.com', '3343568', '');

            this.AdminExist = true;
        }
        
        return promise;
    }
    
    createAdmin(username, email, password, profilePic) {
        let admin = new this.User({
            username: username,
            email: email,
            profilePic: profilePic,
            role: 'admin',
            boughtProducts: [],
            moneyInTheCreditCard: 0,
            shoppingCartProducts: [],
            orders: []
         });
        
         admin.password = this.bcrypt.hashSync(password, this.bcrypt.genSaltSync(8), null);
        
        let promise = admin.save().then(err => {
            if(err) console.log(err);
        });
        
        return promise;
    }

    findByUsername(username) {
        return this.User.findOne({ username: username }, function(error, data) {
            return Promise.resolve(data);
        });
    }

    addMoney(user, money) {
        return new Promise((res, rej) => {
            user.moneyInTheCreditCard += money;

            user.save();
            res();
        });
    }
    
    getAllUsers() {
        return this.User.find({}, function(err, data) {
            return Promise.resolve(data);   
        });
    }
    
    updateEmail(id, newEmail) {
      return  this.User.update({ _id: id }, 
                               { email: newEmail }, 
                               (err) => {
                                   if(err) {
                                      return err;
                                   }
                               });
    }
    
    updateProfileImage(id, newImage) {
      return  this.User.update({ _id: id }, 
                               { profilePic: newImage }, 
                               (err) => {
                                   if(err) {
                                      return err;
                                   }
                               });
    }
    
    updateUsername(id, newUsername) {
      return this.User.find({ username: newUsername }, (err, data) => {
          if(data.length !== 0) {
             return;
          } else {
             return this.User.update({ _id: id }, { username: newUsername }, function(err) {
                console.log(err); 
             });
          }
      });
    }
    
    isAdmin(user) {
        if(user.role === 'admin') {
           return true;
        }
        
        return false;
    }
}

module.exports = UserService;