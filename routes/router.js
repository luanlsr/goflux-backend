const { Router } = require('express');

// const { createUser, findAll, findById } = require('../controllers/userController');

// const validateUser = require('../validations/userValidations');
// const validateJWT = require('../auth/validateJWT');

const routes = Router();

routes.post('/user', createUser);

module.exports = routes;
