
/**
 * Created by haonan on 2016/12/7.
 */
//引入domain 来捕获异步异常
var domain = require('domain');
//创建一个domain 的实例
var oDomain = domain.create();

function throwError() {
    throw  new Error('syncError 123123');
}

var asyncThrowError = setTimeout(function () {
    throw  new Error('asyncError 123123');
}, 0);

oDomain.run(asyncThrowError);
oDomain.on('error', function (err) {
    console.log(err);
});

try{
    throwError();
    asyncThrowError();
}catch (err){
    console.log(err);
}

//监听全局的异常
process.on('uncaughtException', function (err) {
    console.log(err);
});
