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
    //cluster.fork()������һ���ӽ���
    var worker = createWorker();
    //���������ӽ����쳣�˳� ���´���һ���ӽ���
    cluster.on('exit', function () {
        if (count > 1) return;
        createWorker();
        count++;
    });
    //���ӽ��̷�����Ϣ
    worker.send({name: 'dulei'});
    worker.on('message', function (data) {
        console.log(data.name + ' is ' + data.chat)
    });
} else {
    //���������̴��ݹ���������
    //process.on('message', function (data) {
    //    console.log(data.name);
    //    //�������̷�����Ϣ
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
