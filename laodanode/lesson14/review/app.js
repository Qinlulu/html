/**
 * Created by Nan on 2016/12/12.
 */
//var app = require('express')();
var express = require('express');

var app = express();
var routes = require('./routes')(app);


app.listen(8080, function () {
    console.log('8080');
});