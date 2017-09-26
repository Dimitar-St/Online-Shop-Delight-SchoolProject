var passport = require('passport'),
    User = require('../../models/user-model.js')(),
    LocalStrategy = require('passport-local').Strategy;;

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});

require('./local-strategy.js')(passport, User, LocalStrategy);

module.exports = (app) => {
    app.use(passport.initialize());
    app.use(passport.session());
};