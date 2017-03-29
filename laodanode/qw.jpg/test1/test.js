/**
 * Created by Nan on 2016/10/25.
 */
//var express = require('express');
//var routes = express.Router();
//
//routes.get('/', function (req, res, next) {
//    res.render('index', {title: 'Express'});
//});
//
//module.exports = routes;


module.exports = function (app) {
    app.get('/', function (req, res) {
        res.send('Hello world');
    });
    app.get('/customer', function (req, res) {
        res.send('customer page');
    });
    app.get('/admin', function (req, res) {
        res.send('admin page');
    });
};
