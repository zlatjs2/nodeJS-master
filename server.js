const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const PORT = 5000;

app.set('port', process.env.PORT || PORT);

app.use(cors());
app.use('/', routes);

app.listen(PORT, () => {
  console.log('#### On Port:', PORT);
});
