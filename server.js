const express = require('express');
const app = express();
const rIndex = require('./routes/index');
const rStore = require('./routes/store');

const PORT = 3001;

// app.set('port', process.env.PORT || PORT);

app.use('/', rIndex);
app.use('/store', rStore);

app.listen(PORT, () => {
  console.log('#### On Port:', PORT);
});