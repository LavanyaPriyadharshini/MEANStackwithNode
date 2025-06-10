// this is the files which connects to all the url's 

var express = require('express');

const router = express.Router();

var userController = require('../src/user/userController');

router.route('/user/getAll').get(userController.getDataControllerfn)
//create a folder src -> user -> under this create a file userController, with the same name


//creating a user - POST method
router.route('/user/create').get(userController.createUserController)
