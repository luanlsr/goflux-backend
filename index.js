const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');

const app = express();
const routes = require('./routes/router');
const error = require('./middlewares/error');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 
}
app.use(cors(corsOptions))
app.use(bodyParser.json());

app.use('/', routes, error);

app.listen(PORT, () => {
  console.log(`ouvindo porta ${PORT}!
  Acessar: http://localhost:3001`)
});