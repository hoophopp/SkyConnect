const express = require('express');
const router = express.Router();
const verifyToken = require('../controller/verifyToekn');
const post = require('../controller/postpage');

router.post('/', verifyToken, post);

module.exports = router;