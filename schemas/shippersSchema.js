const Joi = require('joi');

const shippersSchema = Joi.object({
  name: Joi.string().empty().required(),
  doc: Joi.string().empty().required(), 
  about: Joi.string().empty().required(), 
  active: Joi.string().empty().required(),
  site: Joi.string().empty().required(),
});

module.exports = { shippersSchema };