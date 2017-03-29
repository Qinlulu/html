/**
 * Created by haonan on 2016/12/8.
 */

//����domainģ��
var domain = require('domain');
//����һ��domain��ʵ��
var oDomain = domain.create();

//ͬ������
function sync() {
    throw new Error('sync error');
}
//�첽����
function async() {
    setTimeout(function () {
        throw new Error('async error');
    }, 0);
}
//��������첽����
oDomain.run(async);
//ͨ�� domain.on('error',callback) ������������첽�쳣
oDomain.on('error', function (err) {
    console.log(err);
});