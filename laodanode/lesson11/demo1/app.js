/**
 * Created by haonan on 2016/12/8.
 */

//���߳� ͬ��
console.log('before sync');
function sync() {
    console.log('123');
}
sync();
console.log('after sync');

//������:
//----------------------------
//before sync
//123
//after sync


//���߳�  �첽
console.log('before sync');
setTimeout(function () {
    console.log('123')
},0);
console.log('after sync');

//������:
//----------------------------
//before sync
//after sync
//123



