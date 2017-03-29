/**
 * Created by Nan on 2016/12/13.
 */
var mysql = require('mysql');
var option = {
    host: '127.0.0.1',
    user: 'root',
    password: '111111',
    database: '1501d'
};
var pool = mysql.createPool(option);

module.exports = function (username, password,res) {

    var $query = 'select * from yanzheng where user=\'' + username + '\' and password=\'' + password + '\'';
    pool.getConnection(function (err, connection) {
        if (err) {
            return console.error(err)
        }
        connection.query($query, function (err, result) {
            if (err) return console.error(err);
            if (result.length) {
                var data = {code: '0', data: result[0]};
                res.json(data);
            } else {
                var data = {code: '1', msg: 'error'};
                res.json(data);
            }
            connection.release();
        });
    });
};