/**
 * Created by haonan on 2016/12/8.
 */

//引入domain模块
var domain = require('domain');
//创建一个domain的实例
var oDomain = domain.create();

//同步方法
function sync() {
    throw new Error('sync error');
}
//异步方法
function async() {
    setTimeout(function () {
        throw new Error('async error');
    }, 0);
}
//运行这个异步方法
oDomain.run(async);
//通过 domain.on('error',callback) 监听所捕获的异步异常
oDomain.on('error', function (err) {
    console.log(err);
});