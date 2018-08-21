// Global const variables
const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3306;

const app = express();

// uses express and parses json data
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(express.static('./app/public'));


// Route Requirements
require('./app/routes/api-routes.js')(app);
require('./app/routes/html-routes.js')(app);

// Port Listener
app.listen(PORT, function () {
console.log(`Listening on ${PORT}`);
});
