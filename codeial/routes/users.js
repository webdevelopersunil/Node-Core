const express = require('express');
const router = express.Router();

// Mapping the controller file
const usersController = require('../controllers/users_controller');





router.get('/profile', usersController.profile);

router.get('/timeline',usersController.timeline);






module.exports = router;