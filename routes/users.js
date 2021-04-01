var express = require('express');
var router = express.Router();
var usersController = require('../controllers/users')

/* GET users listing. */
router.get('/:id', usersController.getUserById)

router.get('/search/:phone', usersController.getUserByPhone)

router.get('/', usersController.getAllUsers)

router.post('/', usersController.createUser)

router.patch('/:id', usersController.updateUser)

router.delete('/:id', usersController.deleteUser)

module.exports = router;
