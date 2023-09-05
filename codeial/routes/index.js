// Call the loaded express from host
const express = require('express');

// Require the Router from Express package
const router = express.Router();

// Require the controller
const homeController = require('../controllers/home_controller');


// Accessing the home function from the homeController
router.get('/',homeController.home);





// Exported the routes for host file acceess index.js
module.exports = router;