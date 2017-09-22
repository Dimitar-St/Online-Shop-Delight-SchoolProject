module.exports = function() {
    const express = require("express"),
          app = express(),
          path = require('path'),
          libsPath = path.join(__dirname, '../node_modules'),
          publicPath = path.join(__dirname, '../public'),
          port = 8080;
    
    app.set('view engine', 'pug');
    app.set('views', './views/');

    app.use('/libs', express.static(libsPath));
    app.use('/public', express.static(publicPath));

    require('../routers/routes-loader.js')(app);

    return app;
};