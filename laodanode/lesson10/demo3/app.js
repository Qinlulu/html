/**
 * Created by haonan on 2016/12/7.
 */
var cluster = require('cluster');
var child_process = require('child_process');
var count = 0;

function createWorker() {
    return cluster.fork();
}
if (cluster.isMaster) {
    //cluster.fork()来创建一个子进程
    var worker = createWorker();
    //当创建的子进程异常退出 重新创建一个子进程
    cluster.on('exit', function () {
        if (count > 1) return;
        createWorker();
        count++;
    });
    //向子进程发送消息
    worker.send({name: 'dulei'});
    worker.on('message', function (data) {
        console.log(data.name + ' is ' + data.chat)
    });
} else {
    //监听主进程传递过来的数据
    //process.on('message', function (data) {
    //    console.log(data.name);
    //    //向主进程发送消息
    //    process.send({name: 'dulei', chat: 'xiaohuoza'});
    //});
    var work = child_process.spawn('node', ['server.js']);
    work.stdout.on('data', function (data) {
        console.log(data.toString())
    });

    //var http = require('http');
    //http.createServer(function (req, res) {
    //    res.end('child process');
    //}).listen(8080, function () {
    //    console.log('listen 8080');
    //});
}
