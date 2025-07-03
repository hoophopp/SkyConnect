const express = require('express');
const router = express.Router();
const chnageinfo = require('../controller/changeinfo');
const verifytoken = require('../controller/verifyToekn');

router.post('/', verifytoken, chnageinfo);


module.exports = router;