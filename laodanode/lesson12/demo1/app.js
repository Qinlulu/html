/**
 * Created by haonan on 2016/12/9.
 */

//ͨ��nodejs api ��װ�ɵ�һ�����������
var express = require('express');
var home = require('./routes/home');
var index = require('./routes/index');


var app = express();

app.get('/', home);
app.get('/index', index);

app.listen(8080, function () {
    console.log('listen 8080');
});