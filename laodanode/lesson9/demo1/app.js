/**
 * Created by haonan on 2016/12/6.
 */

//使用xoopy 终端命令来复制文件夹
//xcopy sourceDirectory targetDirectory

//process.title
//输入cmd终端的路径
//node xxx

//process.stdout 标准输出
//process.stdout.write('123\n');
//process.stderr 标准输出错误
//process.stderr.write('123\n');
//process.pid   进程的id 每次创建一个进程 ip 都不是固定的


//标准输入
//process.stdin.on('data', function (data) {
//    console.log('this is stdin data: ' + data.toString());
//    //杀死一个进程 kill()
//    process.kill();
//});
//监听退出进程 执行某段操作
//process.on('exit', function () {
//    console.log('process is exit');
//});

//process.argv 返回一个数组  包含传递的参数
//可以通过 slice()来截取
//var arr = process.argv;

//返回进程的一个当前工作目录的路径
//var dirname = process.cwd();
//console.log(dirname);
//console.log(__dirname);

//杀死一个进程
//process.kill(pid, [signal])

//process.title  输出cmd终端的路径 包含执行的node的参数
//process.arch  获得系统类型

//var util = require('util');
//console.log(util.inspect(process.memoryUsage()));


//退出进程exit(code)方法 默认值是0，还可以传参1  0代表正常退出，1代表非正常退出
//process.stdin.on('data', function (data) {
//    console.log('this is stdin data: ' + data.toString());
//    //非正常退出，或者报一个异常 exit 传递参数1
//    process.exit();
//});
//process.on('exit', function (code) {
//    //if(!code) return console.error('has error');
//
//    if (code) {
//        console.error('has error');
//        process.stderr.write('has error');
//
//    } else {
//        console.error('has no error');
//        process.stderr.write('has no error');
//    }
//});

//process.nextTick 速度更快 效率更高 能力更强
//console.log('before tick');
//setTimeout(function () {
//   console.log(111)
//},0);
//process.nextTick(function(){
//    console.log(222);
//});
//console.log('after tick');


//ChildProcess 是一个时间发射器
//var child_process = require('child_process');
//var util = require('util');
//var cmd = util.format('xcopy','a','b');
//child_process.exec(cmd);


//通过spawn 方法 创建一个子进程
//child_process.spawn(cmd,['server.js']);
var child = require('child_process').spawn('node', ['server.js']);
child.stdout.on('data', function (data) {
    console.log(data.toString())
    child.stdout.emit('end');
});
child.stdout.on('end', function (data) {
    console.log('stdout run end');
    child.kill();
});

process.on('exit', function (code) {
    console.log('child_process is run end: ' + code);
});