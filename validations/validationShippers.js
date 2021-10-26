const rescue = require('express-rescue');
const { StatusCodes: { BAD_REQUEST } } = require('http-status-codes');
const { shippersSchema } = require('../schemas/shippersSchema');

const validateShippers = rescue(async (req, res, next) => {
  const { error } = shippersSchema.validate(req.body);
  if (error) next({ message: error.details[0].message, statusCode: BAD_REQUEST });
  next();
});

module.exports = validateShippers;