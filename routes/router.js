const { Router } = require('express');

const { login } = require('../controllers/loginController');
const { createShippers } = require('../controllers/shippersController');

const validateLogin = require('../validations/validationLogin');
const validateShippers = require('../validations/validationShippers')

const routes = Router();

routes.post('/', validateLogin,login);
routes.post('/shippers', validateShippers,createShippers);


module.exports = routes;
