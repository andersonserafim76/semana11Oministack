const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create); //Rota para validar login

routes.get('/ongs', OngController.index); //Rota de listagem
routes.post('/ongs', OngController.create); //Rota de Incluir

routes.get('/profile', ProfileController.index); //Roda de listagem de uma ong

routes.get('/incidents', IncidentController.index); //Rota de listagem
routes.post('/incidents', IncidentController.create); //Rota de Incluir
routes.delete('/incidents/:id', IncidentController.delete); //Rota de Deletar

module.exports = routes;