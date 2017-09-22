const { Router } = require('express');

module.exports = function(app) {
    let router = new Router();

    require('./home-routes.js')(router);

    app.use(router);
};