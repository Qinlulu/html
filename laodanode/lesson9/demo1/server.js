/**
 * Created by haonan on 2016/12/6.
 */
var http = require('http');
http.createServer(function (req, res) {
    res.end('server');
}).listen(8080, function () {
    console.log('8080');
});