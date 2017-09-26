module.exports = {
    loadHomePage(req, res) {
        res.render('home.pug', {
            isAuthenticated: req.isAuthenticated(),
            user: req.user
        });
    }
};