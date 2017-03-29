/**
 * Created by haonan on 2016/12/10.
 */
var express = require('express');
var ejs = require('ejs');
var path = require('path');

var index = require('./routes/index');
var user = require('./routes/user');

var app = express();

//设置视图路径
app.engine('html', ejs.__express);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));



app.get('/', index);
app.get('/user', user);



app.listen(8080, function () {
    console.log('listen 8080');
});