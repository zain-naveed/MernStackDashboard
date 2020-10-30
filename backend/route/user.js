const express = require('express');
const router = express.Router();

const UserController = require('./behavior/User');
router.route('/').get(UserController.GetUser);
router.route('/').post(UserController.addUser);
router.route('/login').post(UserController.loginUser);
module.exports = router;