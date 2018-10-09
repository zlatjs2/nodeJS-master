const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');
const app = express();
const PORT = 5000;

app.set('port', process.env.PORT || PORT);

app.use(morgan('dev'));
app.use('/', routes);

app.listen(PORT, () => {
  console.log('#### on port number:', PORT);
});
