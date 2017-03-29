/**
 * Created by Nan on 2016/12/14.
 */

var userlogin = require('../modules/userlogin');
var express = require('express');
var router = express.Router();

router.post('/userlogin', function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    userlogin(username, password, function (err, result) {
        if (err) return console.error(err);
        if (result.length > 0) {
            res.json({
                code: 0,
                errMsg: "",
                data: result[0]
            });
        } else {
            res.json({
                code: 1,
                errMsg: "error"
            });
        }
    });
});

module.exports = router;