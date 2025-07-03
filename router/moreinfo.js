const { addmoreinfo, uploadMiddleware } = require('../controller/moreinfo');
const express = require('express');
const router = express.Router();
const verifytoken = require('../controller/verifyToekn');


router.post('/', verifytoken, uploadMiddleware, addmoreinfo);

module.exports = router;

