const Joi = require('joi');

const createOngSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  whatsapp: Joi.string().optional(),
  city: Joi.string().optional(),
  uf: Joi.string().length(2).optional()
});

module.exports = { createOngSchema };