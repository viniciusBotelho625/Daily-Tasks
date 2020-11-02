const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const UserController = require('../controllers/users-controller');


router.get('/', UserController.getUser);
router.post('/create', UserController.postUser);
router.put('/', login.mandatory, UserController.updateUser);
router.delete('/', login.mandatory, UserController.deleteUser);
router.post('/login', UserController.logon);


module.exports = router;