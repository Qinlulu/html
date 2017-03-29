/**
 * Created by haonan on 2016/12/7.
 */

var http = require('http');
http.createServer(function (req, res) {
    res.end('child process');
}).listen(8080, function () {
    console.log('listen 8080');
});