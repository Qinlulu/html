/**
 * Created by Nan on 2016/12/14.
 */

//引入mysql模块
var mysql = require('mysql');
//创建连接的配置
var $conf = require('../configs/sqlconf');


var pool = mysql.createPool($conf);

pool.getConnection(function (err, connction) {
    if (err) return console.error(err);
    module.exports.login = function (username, password, callback) {
        $query = 'select * from login where username=\'' + username + '\' and passwrod=\'' + password + '\'';
        connction.query($query, function (err, result) {
            callback(err,result);
        });
    }
});

