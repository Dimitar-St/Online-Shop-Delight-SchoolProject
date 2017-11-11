class UserService {
    constructor(model, bcrypt) {
        this.User = model;
        this.bcrypt = bcrypt;
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
        
        newUser.password = this.bcrypt.hashSync(password, this.bcrypt.genSaltSync(8), null);
        
        let promise = newUser.save().then(err => {
            if(err) console.log(err);
        });
        
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
            shoppingCartProducts: []
         });
        
         admin.password = this.bcrypt.hashSync(password, this.bcrypt.genSaltSync(8), null);
        
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