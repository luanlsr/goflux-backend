const { Router } = require('express');

const { login } = require('../controllers/controller');
const validateLogin = require('../validations/validation');

const routes = Router();

routes.post('/', validateLogin,login);

module.exports = routes;
