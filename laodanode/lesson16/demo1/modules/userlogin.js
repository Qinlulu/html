/**
 * Created by Nan on 2016/12/14.
 */
var mysql = require('mysql');
var $conf = require('../configs/sqlconf');


module.exports = function (username, password,callback) {
    var connection = mysql.createConnection($conf);
    connection.connect();
    $query = 'select * from login where username=\'' + username + '\' and passwrod=\'' + password + '\'';
    connection.query($query, function (err, results) {
        
        callback(err,results);
    });
    connection.end();
};