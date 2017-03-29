/**
 * Created by Nan on 2016/11/6.
 */
var http = require('http');
var querystring = require('querystring');
var util = require('util');
var url = require('url');

http.createServer(function (req, res) { var post = '';     //定义了一个post变量，用于暂存请求体的信息


    req.on('end', function () {    //在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。

        res.writeHead(200, {
            "Content-Type": "text/html;charset='utf-8'",
            "Access-Control-Allow-Origin": 'http://localhost:63342'
        });

        res.end('{"name": "haonan", "num": "89757"}');
    });
}).listen(3000);