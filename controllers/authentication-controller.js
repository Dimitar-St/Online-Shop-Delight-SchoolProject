class AuthenticationController {
    constructor(service) 
    {
        this.service = service;
    }
    
    get service() {
        return this._service;
    }
    
    set service(value) {
        if(value === null || value === undefined) {
           throw 'The passed service is null';
        }
        
        this._service = value;
    }
    
    loadLoginPage(req, res) {
        res.render('./user/login-page');
    }

    loadRegisterPage(req, res) {
        res.render('./user/register-page');
    }

    register(req, res) {
        const username = req.body.username,
              password = req.body.password,
              email = req.body.email,
              profilePicture = req.body.urlProfilePicture;


        this.service.createUser(username, email, password, profilePicture);

        res.redirect('/login');
    }

    login(req, res) {
        res.render('home', {
            isAuthenticated: req.isAuthenticated(),
            user: req.user,
            isAdmin: req.user.role === 'admin',
            message: {
                success: 'Успешно влезнахте в профила си!'
            }
        });
    }

    logout(req, res) {
        req.logout();
        res.render('home', {
            message: {
                success: 'Успешно излезнахте от профила си!'
            }
        });
    }
}

module.exports = AuthenticationController;




