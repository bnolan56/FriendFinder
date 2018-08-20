const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3306;

const app = express();

app.use(bodyParser.json());
app.use(express.static('./app/public'));

require('./app/routes/api-routes')(app);

app.listen(port, function () {
  `Listening on PORT 3306`
})
