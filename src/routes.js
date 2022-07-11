const express = require('express');
const routes = express.Router();

const PlanetController = require('../Controller/PlanetController');
const SateliteController = require('../Controller/SateliteController');

routes.post('/planets', PlanetController.store);
routes.get('/planets', PlanetController.index);
routes.get('/planets/:id', PlanetController.indexone);
routes.put('/planets/:id', PlanetController.put);
routes.delete('/planets/:id', PlanetController.delete);

routes.post('/planets/:planetId/satelites', SateliteController.store);
routes.get('/planets/:planetId/satelites', SateliteController.index);

module.exports = routes