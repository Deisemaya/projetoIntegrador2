const express = require('express');
const Router = express.Router();
const AuthController = require('../controllers/AuthController');

Router.get('/home', AuthController.showHome);
Router.get('/agenda', AuthController.showAgenda);
Router.get('/mentores', AuthController.showMentores);

module.exports = Router;