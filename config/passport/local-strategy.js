module.exports = function(passport, User, LocalStrategy) {
    const bcrypt = require("bcrypt-nodejs");
    
    passport.use(new LocalStrategy(
        {
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback : true
        },
        (req, username, password, done) => {
            User.findOne({ username }, function(err, user) {
                if(user === null) {
                   return done(null, false, req.flash( 'error', 'Не съществува такъв потребител.'));
                }
                
                if (!user.validPassword(password)) {
                  return done(null, false, req.flash( 'error', 'Невярна парола'));
                }

                return done(null, user, req.flash('success', 'Log in seccesfully'));
            })
            .catch((err) => done(null, false, {
                success: false,
                message: 'Incorrect username',
            }));
        }
    ));
};