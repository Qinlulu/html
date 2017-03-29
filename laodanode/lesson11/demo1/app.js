/**
 * Created by haonan on 2016/12/8.
 */

//单线程 同步
console.log('before sync');
function sync() {
    console.log('123');
}
sync();
console.log('after sync');

//输出结果:
//----------------------------
//before sync
//123
//after sync


//多线程  异步
console.log('before sync');
setTimeout(function () {
    console.log('123')
},0);
console.log('after sync');

//输出结果:
//----------------------------
//before sync
//after sync
//123



