const rescue = require('express-rescue');
const { StatusCodes: { BAD_REQUEST } } = require('http-status-codes');
const { loginSchema } = require('../schemas/Schema');

const validateLogin = async (req, res, next) => {
  const {email, password} = req.body;
  const { error } = loginSchema.validate({email, password});
  if (error) next({ message: error.details[0].message, statusCode: BAD_REQUEST });
  next();
};

module.exports = validateLogin;