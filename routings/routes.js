// this is the files which connects to all the url's 

var express = require('express');

const router = express.Router();

router.route('/user/getAll').get(userController.getDataControllerfn)