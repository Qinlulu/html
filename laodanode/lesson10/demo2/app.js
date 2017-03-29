
/**
 * Created by haonan on 2016/12/7.
 */
//����domain �������첽�쳣
var domain = require('domain');
//����һ��domain ��ʵ��
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

//����ȫ�ֵ��쳣
process.on('uncaughtException', function (err) {
    console.log(err);
});
