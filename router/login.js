const express =  require('express');
const router = express.Router();
const verifytoken = require('../controller/verifyToekn');
const login = require('../controller/signuplogin');

router.get('/login', verifytoken, login);

module.exports = router;