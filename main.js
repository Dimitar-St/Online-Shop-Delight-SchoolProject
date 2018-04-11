const app = require('./config/app.js')(),
      db = require('./db/database.js');

app.listen(process.env.PORT || 3030, () => {
    console.log('The server is running on port : ' + 8080)
    db();
});