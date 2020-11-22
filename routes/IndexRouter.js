const express = require('express');
const Router = express.Router();
const AuthController = require('../controllers/AuthController');

//as rotas eram rotas filhas, eu teria que escrever http://localhost:333/home/home
//era só mudar a home para '/' e as outras deixei como rotas filhas mesmo
Router.get('/', AuthController.showHome);
Router.get('/agenda', AuthController.showAgenda);
Router.get('/mentores', AuthController.showMentores);

module.exports = Router;