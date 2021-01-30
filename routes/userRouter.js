var express = require('express');
var Router = express.Router();

const userController = require('../controllers/userController');

Router.get('/cadastro', userController.show);
Router.post('/cadastro', userController.create)
Router.post('/login', userController.login);
Router.get('/login', userController.showLogin);
Router.get('/cadastro-mentor', userController.showCadastroMentor);

module.exports = Router;