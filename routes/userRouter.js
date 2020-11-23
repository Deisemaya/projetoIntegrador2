var express = require('express');
var Router = express.Router();
const multer = require('multer');

const usercontroller = require('../controllers/userController');

Router.get('/cadastro',usercontroller.show);
Router.post('/cadastro', usercontroller.create)
