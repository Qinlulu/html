/**
 * Created by haonan on 2016/12/8.
 */

//ͬ������
function sync() {
    throw new Error('sync error');
}
//�첽����
setTimeout(function () {
    throw new Error('async error');
}, 0);

try {
    sync();
} catch (e) {
    console.error(e);
}

console.log('memeda');

process.on('uncaughtException', function (err) {
    console.log(err);
});