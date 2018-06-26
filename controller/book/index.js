var express = require('express');
var router = express.Router();
const jsonParser = require('body-parser').json();

import { all } from './process';

// all book
router.get('/', jsonParser, all);

module.exports = router;
