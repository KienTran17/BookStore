var express = require('express');
var router = express.Router();
const jsonParser = require('body-parser').json();

import { register } from './process';

// register
router.get('/', jsonParser, register);

module.exports = router;
