const express = require('express');
const Router = express.Router();
const indexController = require('../controllers/indexController');

Router.get('/', indexController.showHome);
Router.get('/agenda', indexController.showAgenda);
Router.get('/mentores', indexController.showMentores);

module.exports = Router;