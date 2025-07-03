const express = require('express');
const router = express.Router();
const deleteAccount = require('../controller/deleteaccount');
const verifyToekn = require('../controller/verifyToekn');


router.post('/', verifyToekn, deleteAccount);

module.exports = router;
