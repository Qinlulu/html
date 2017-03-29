/**
 * Created by Nan on 2016/12/3.
 */
var http = require('http');
var url = require('url');

//写法一：
//http.createServer(function (req, res) {
//    console.log(req.url);
//    res.writeHead(200, {'Content-Type': 'text/html;charset:utf8'});
//    res.end('hello world!');
//
//}).listen(8080, function () {
//    console.log('listen port at 8080');
//});

//写法二：
var server = http.createServer(function (req, res) {
    var urls = "http://www.baidu.com/?username='haonan'&password='123456'";
    console.log(url.parse(urls));
    res.writeHead(200, {'Content-Type': 'text/html;charset:utf8'});
    res.end('hello world!');

});
server.listen(8080, function () {
    console.log('listen port at 8080');
});