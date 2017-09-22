const app = require('./config/app.js')();

app.listen(8080, () => console.log('The server is running on port : ' + 8080));