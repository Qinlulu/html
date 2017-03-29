/**
 * Created by Nan on 2016/12/16.
 */
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var flash = require('connect-flash');

var path = require('path');
var ejs = require('ejs');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', ejs.__express);
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieParser('error message'));
app.use(session({cookie: {maxAge: 60000}}));
app.use(flash());
app.use('/login',function(req,res,next){
    res.locals.error = req.flash('error');
    next();
});

var router = require('./routes')(app);

app.listen(8080, function () {
    console.log('listen 8080');
});




