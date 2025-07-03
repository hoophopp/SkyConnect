const express = require('express');
const router = express.Router();
const refreshcontrooler = require('../controller/refresh');

router.post('/', refreshcontrooler);

module.exports = router;