/**
 * Created by Nan on 2016/12/14.
 */

//����mysqlģ��
var mysql = require('mysql');
var $conf = require('../configs/sqlconf');
//�������ӵ�����

//����һ�����ݿ�����
var connection = mysql.createConnection($conf);
//�������ݿ�
connection.connect();
//ִ�в�ѯ���
connection.query('select * from login', function (err, rows) {
    if (err) return console.error(err);
    console.log(rows[0]);
});
//�Ͽ����ݿ�����
connection.end();