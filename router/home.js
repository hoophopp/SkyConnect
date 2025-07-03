const express = require('express');
const router = express.Router();
const verifycontent = require('../controller/verifyToekn');
const showPost = require('../controller/home');

router.get('/', verifycontent, showPost);

module.exports = router;