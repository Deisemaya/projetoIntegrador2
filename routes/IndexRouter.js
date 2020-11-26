const express = require('express');
const Router = express.Router();
const indexController = require('../controllers/indexController');

//as rotas eram rotas filhas, eu teria que escrever http://localhost:333/home/home
//era só mudar a home para '/' e as outras deixei como rotas filhas mesmo
Router.get('/', indexController.showHome);
Router.get('/agenda', indexController.showAgenda);
Router.get('/mentores', indexController.showMentores);


module.exports = Router;