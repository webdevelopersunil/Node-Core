const exppress = require('express');
const router = exppress.Router();

// importing the User Controller
const { singUp, signIn, createUser } = require('../controller/userController');


router.get('/sign-up', singUp);

router.get('/sign-in', signIn);

router.post('/create',createUser);




module.exports = router;