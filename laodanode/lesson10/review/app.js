/**
 * Created by haonan on 2016/12/7.
 */
//内置模块
var fs = require('fs');
var path = require('path');
var http = require('http');
var url = require('url');
var util = require('util');
var zlib = require('zlib');
var net = require('net');
var child_process = require('child_process');
var cluster = require('cluster');
var os = require('os');


//process 全局对象

//process.stdin.on('data', function (data) {
//    process.stdout.write(data.toString());
//    //process.stdin.emit('end');
//    //process.exit(1);
//});
//process.stdin.on('end', function () {
//    process.stdout.write('stdin emit end');
//});
//process.on('exit', function (code) {
//    console.log(code);
//    process.stdout.write('process is exit: ' + code);
//});
//
////
////cluster.isMaster 判断当前是否是主进程
////cluster.isWorker 判断当前是否是子进程
//
////获得 cpu 个数
//var cpuLenth = os.cpus().length;
//if (cpuLenth < 3) return;
//
//if (cluster.isMaster) {
//    console.log('is master');
//    var worker = cluster.fork();
//    //主进程给子进程发送消息
//    worker.send({name: 'haonan'});
//    worker.on('message', function (data) {
//        console.log(data.name);
//    });
//
//} else {
//
//    var runServer = child_process.spawn('node', ['server.js']);
//    runServer.stdout.on('data', function (data) {
//        process.stdout.write(data);
//    });
//    process.on('message', function (data) {
//        console.log(data.name);
//        process.send({name:'1501D'});
//    });
//
//}

//process.stdin.on('data', function (data) {
//    console.log(data.toString());
//    process.stdin.emit('end');
//});
//process.stdin.on('end', function () {
//    console.log('stdin is finished!');
//});
console.log('before throwError ');

function throwError() {
    throw  new Error('syncError 123123');
}

var asyncThrowError = setTimeout(function () {
    throw  new Error('asyncError 123123');
}, 0);

try {
    throwError();
    asyncThrowError();
} catch (err) {
    console.log('error is :' + err);
}

process.on('uncaughtException', function (err) {
    console.log('error is:' + err);
});
console.log('after throwError ');