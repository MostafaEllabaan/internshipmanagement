const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

//get all the user
router.get('/', userController.get_users )

//create new user
router.post('/', userController.create_user);

module.exports = router;
