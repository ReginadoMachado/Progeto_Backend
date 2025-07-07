const Joi = require('joi');

const createIncidentSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  value: Joi.number().positive().required(),
  category: Joi.string().optional()
});

module.exports = { createIncidentSchema };