/**
 * Created by Nan on 2016/12/14.
 */
var userlogin = require('../modules/login');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('index', {});
});

module.exports = router;