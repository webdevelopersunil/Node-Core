const express = require('express');

const router = express.Router();

const homeController = require('../controllers/home_controller');



router.get('/',homeController.index);

router.post('/submit-to-do',homeController.saveToDo)




module.exports = router;