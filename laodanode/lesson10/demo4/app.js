/**
 * Created by haonan on 2016/12/7.
 */
var cluster = require('cluster');
var count = 1;

if(cluster.isMaster){
    cluster.fork();
    cluster.on('exit', function () {
        if(count>2) return console.error('please restart by hand');
        cluster.fork();
        count++;
    });
}else{

    var http = require('http');
    http.createServer(function (req, res) {
        res.end('child process');
    }).listen(123, function () {
        console.log('listen 8080');
    });
}