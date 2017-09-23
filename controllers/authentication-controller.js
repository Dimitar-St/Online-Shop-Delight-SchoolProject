module.exports = {
    loadLoginPage(req, res) {
        res.render('./user/login-page');
    },

    loadRegisterPage(req, res) {
        res.render('./user/register-page');
    }
};