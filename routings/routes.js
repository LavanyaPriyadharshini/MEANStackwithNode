// this is the files which connects to all the url's 

var express = require('express');

const router = express.Router();

var userController = require('../src/user/userController');

router.route('/user/getAll').get(userController.getDataControllerfn)
//create a folder src -> user -> under this create a file userController, with the same name

// STEPS OF EXECUTION
// 1. the get method hits the user controller
//2. in user controller it hits the service
// 3. from the service ,the user model is called and the database gets connected



//creating a user - POST method
router.route('/user/create').post(userController.createUserController)


//updating the records using id
router.route('/user/update/:id').patch(userController.updateUserController);


router.route('/user/delete/:id').patch(userController.updateUserController);


//this is very important, then only you will get db started console, and the code starts executing
module.exports = router;