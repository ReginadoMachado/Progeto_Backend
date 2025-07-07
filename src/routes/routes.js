const express = require('express');
const OngController = require('../controllers/OngController');
const IncidentController = require('../controllers/IncidentController');
const AuthController = require('../controllers/AuthController');
const auth = require('../middleware/auth');
const validate = require('../middleware/validate');
const { createOngSchema } = require('../validators/ong');
const { createIncidentSchema } = require('../validators/incident');

const routes = express.Router();

routes.post('/ongs', validate(createOngSchema), OngController.create);
routes.get('/ongs', OngController.index);

routes.post('/login', AuthController.login);
routes.get('/incidents', IncidentController.index);

routes.use(auth);
routes.post('/incidents', validate(createIncidentSchema), IncidentController.create);
routes.put('/incidents/:id', IncidentController.update);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;