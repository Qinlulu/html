/**
 * Created by haonan on 2016/12/8.
 */
//��������ģ��
var cluster = require('cluster');
var http = require('http');

if(cluster.isMaster){
    //����һ���ӽ���
    cluster.fork();
    cluster.on('exit',function(){
        cluster.fork();
    });
}else if(cluster.isWorker){
    var server = http.createServer(function (req,res) {
        res.end('123');
    });
    server.listen(8080, function () {
        console.log('listen 8080 port');
    });

}