/**
 * Created by Nan on 2016/12/12.
 */
//var app = require('express')();
var express = require('express');
var path = require('path');

var ejs = require('ejs');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', ejs.__express);
app.use(express.static(path.join(__dirname, 'public')));

//app.use(function (req,res,next) {
//    console.log('123');
//    next();
//});
//app.all('*',function (req,res,next) {
//    console.log('all body memeda');
//    next();
//});
var routes = require('./routes')(app);

app.listen(8080, function () {
    console.log('8080');
});