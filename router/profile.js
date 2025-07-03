const express= requier('express');
const router = express.Router();
const verifytoken = require('../controller/verifyToekn');
const profile = require('../controller/homeprofile');

router.get('/', verifytoken, profile);

module.exports = router;