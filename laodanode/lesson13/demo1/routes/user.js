/**
 * Created by haonan on 2016/12/10.
 */

//var user = function (req, res) {
//    res.send('this is user page');
//}
//module.exports = user;


var express = require('express');
var router = express.Router();

router.get('/user', function (req, res) {
    res.send('this is user page');
});
module.exports = router;