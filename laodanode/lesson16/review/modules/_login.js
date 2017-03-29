/**
 * Created by Nan on 2016/12/14.
 */

//引入mysql模块
var mysql = require('mysql');
var $conf = require('../configs/sqlconf');
//创建连接的配置

//创建一个数据库连接
var connection = mysql.createConnection($conf);
//连接数据库
connection.connect();
//执行查询语句
connection.query('select * from login', function (err, rows) {
    if (err) return console.error(err);
    console.log(rows[0]);
});
//断开数据库连接
connection.end();