/**
 * Created by Nan on 2016/10/20.
 */

var express = require('express');
//var Hello  = require('./moudle');
var api = require('./routes/api');


var app = express();

app.get('/api', api.index);
// 设定port变量，意为访问端口
//app.set('port', process.env.PORT || 8000);
// 设定views变量，意为视图存放的目录
//app.set('views', path.join(__dirname, 'views'));
// 设定view engine变量，意为网页模板引擎
app.set('view engine', 'jade');

//app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    //var hello = new Hello ();
    var body = 'hello world';
    //hello.setName('haonan');
    //hello.sayHello();
    res.setHeader('Content-Type', 'text/plain');
    //res.send('hello world');

    res.end(body);
});

app.listen(8000);
console.log("Server runing at port 3000");