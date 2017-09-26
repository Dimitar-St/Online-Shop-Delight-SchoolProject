module.exports = function(passport, User, LocalStrategy) {
    passport.use(new LocalStrategy(
        {
            usernameField: 'username',
            passwordField: 'password'
        },
        (username, password, done) => {
            User.findOne({ username, password }, function(err, user) {
                if (err) { return done(err); }
                
                if (!user) {
                  return done(null, false, { message: 'Incorrect username.' });
                }

                return done(null, user);
            });
        }
    ));
};