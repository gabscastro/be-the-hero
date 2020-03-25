const express = require('express');

const OngCrontroller = require('./controllers/OngController');
const IncidentCrontroller = require('./controllers/IncidentController');
const ProfileCrontroller = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngCrontroller.index);
routes.post('/ongs', OngCrontroller.create);

routes.get('/profile', ProfileCrontroller.index);

routes.post('/incidents', IncidentCrontroller.create);
routes.get('/incidents', IncidentCrontroller.index);
routes.delete('/incidents/:id', IncidentCrontroller.delete);

module.exports = routes;