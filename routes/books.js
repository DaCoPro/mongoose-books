var express = require('express');
var router = express.Router();

const booksCtrl = require('../controllers/books');

/* GET users listing. */
router.get('/', booksCtrl.index);

module.exports = router;
