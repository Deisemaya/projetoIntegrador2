var express = require('express');
var Router = express.Router();


const usercontroller = require('../controllers/userController');

Router.get('/cadastro',usercontroller.show);
Router.post('/cadastro', usercontroller.create)
Router.post('/login', usercontroller.login);
Router.get('/login',usercontroller.showlogin)


/*
Router.get('/perfil/:edit, usercontroller.editById)

 */

module.exports = Router
