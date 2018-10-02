const express = require('express');
const cors = require('cors');
const rIndex = require('./routes/index');
const rStore = require('./routes/store');
const app = express();
const PORT = 5000;

app.set('port', process.env.PORT || PORT);

app.use(cors());
app.use('/', rIndex);
app.use('/store', rStore);

app.listen(PORT, () => {
  console.log('#### On Port:', PORT);
});
