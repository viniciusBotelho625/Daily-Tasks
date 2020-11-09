const express = require('express');
const router = express.Router();
const UserController = require('../controllers/users-controller');

router.post('/', UserController.logon);


module.exports = router;