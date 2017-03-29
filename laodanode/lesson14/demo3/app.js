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
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

var routes = require('./routes')(app);

app.listen(8080, function () {
    console.log('8080');
});