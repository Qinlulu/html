/**
 * Created by Administrator on 2016/12/13.
 */
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var ejs = require('ejs');
var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html',ejs.__express);
app.use(bodyParser.urlencoded({ extended: false }));



var index=require("./routes/index")(app)

app.listen(9888)
