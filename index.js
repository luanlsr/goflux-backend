const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');

const app = express();
// const routes = require('./routes/router');
// const error = require('./middlewares/error');

app.use(bodyParser.json());

const PORT = process.env.PORT || 3001;
app.get('/', (req, res) => {
  res.send('Olá')
})
// app.use('/', routes, error);

app.listen(PORT, () => {
  console.log(`ouvindo porta ${PORT}!
  Acessar: http://localhost:3001`)
});