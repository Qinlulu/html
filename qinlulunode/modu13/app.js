/**
 * Created by Administrator on 2016/12/12.
 */

var express = require('express');
var path = require('path');
var ejs = require('ejs');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));
app.engine('html', ejs.__express);


//var index=require("./views/index.ejs")

//var router=express.Router()


var routes = require("./routes/index")(app);
app.listen(8080, function () {
    console.log("8080");
});
