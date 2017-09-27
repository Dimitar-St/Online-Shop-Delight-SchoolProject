const { Router } = require('express');

module.exports = function(app) {
    let router = new Router();

    require('./home-routes.js')(router);
    require('./authentication-routes.js')(router);
    require('./user-routes.js')(router);

    app.use(router);
};