/**
 * Created by Nan on 2016/12/14.
 */

//����mysqlģ��
var mysql = require('mysql');
//�������ӵ�����
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

