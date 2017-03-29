/**
 * Created by Nan on 2016/12/15.
 */
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var ejs = require('ejs');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', ejs.__express);
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

var routes = require('./routes')(app);

app.listen(8080, function () {
    console.log('listen 8080');
});