/**
 * Created by haonan on 2016/12/10.
 */

//var index = function (req, res) {
//    res.send('this is index page');
//}
//module.exports = index;


var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.send('this is index page');
});
module.exports = router;