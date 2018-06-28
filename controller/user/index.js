var express = require('express');
var router = express.Router();
const jsonParser = require('body-parser').json();

import { register, login } from './process';

// register
router.post('/register', jsonParser, register);

// login
router.post('/login', jsonParser, login);

module.exports = router;
