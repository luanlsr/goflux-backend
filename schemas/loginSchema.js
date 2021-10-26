const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.email().empty().required(),
  password: Joi.string().empty().required(),
});

module.exports = { loginSchema };