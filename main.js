const express = require("express"),
      app = express(),
      path = require('path'),
      libsPath = path.join(__dirname, './node_modules'),
      port = 8080;
      
app.set('view engine', 'pug');
app.set('views', './views/');

app.use('/libs', express.static(libsPath));

require('./routers/routes-loader.js')(app);

app.listen(port, () => console.log('The server is running on port : ' + port));