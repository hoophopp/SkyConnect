const express = require('express');
const router = express.Router();
const { signup } = require('../controller/signuplogin');

router.post('/', signup);

module.exports = router;
