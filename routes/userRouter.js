var express = require('express');
var Router = express.Router();


const usercontroller = require('../controllers/userController');

Router.get('/cadastro',usercontroller.show);
Router.post('/cadastro', usercontroller.create)

module.exports = Router
