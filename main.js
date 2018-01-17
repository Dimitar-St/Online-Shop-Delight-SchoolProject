const app = require('./config/app.js')(),
      db = require('./db/database.js');

app.listen(process.env.PORT || 8080, () => {
    console.log('The server is running on port : ' + 3000)
    db();
});