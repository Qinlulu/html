/**
 * Created by haonan on 2016/12/6.
 */

//ʹ��xoopy �ն������������ļ���
//xcopy sourceDirectory targetDirectory

//process.title
//����cmd�ն˵�·��
//node xxx

//process.stdout ��׼���
//process.stdout.write('123\n');
//process.stderr ��׼�������
//process.stderr.write('123\n');
//process.pid   ���̵�id ÿ�δ���һ������ ip �����ǹ̶���


//��׼����
//process.stdin.on('data', function (data) {
//    console.log('this is stdin data: ' + data.toString());
//    //ɱ��һ������ kill()
//    process.kill();
//});
//�����˳����� ִ��ĳ�β���
//process.on('exit', function () {
//    console.log('process is exit');
//});

//process.argv ����һ������  �������ݵĲ���
//����ͨ�� slice()����ȡ
//var arr = process.argv;

//���ؽ��̵�һ����ǰ����Ŀ¼��·��
//var dirname = process.cwd();
//console.log(dirname);
//console.log(__dirname);

//ɱ��һ������
//process.kill(pid, [signal])

//process.title  ���cmd�ն˵�·�� ����ִ�е�node�Ĳ���
//process.arch  ���ϵͳ����

//var util = require('util');
//console.log(util.inspect(process.memoryUsage()));


//�˳�����exit(code)���� Ĭ��ֵ��0�������Դ���1  0���������˳���1����������˳�
//process.stdin.on('data', function (data) {
//    console.log('this is stdin data: ' + data.toString());
//    //�������˳������߱�һ���쳣 exit ���ݲ���1
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

//process.nextTick �ٶȸ��� Ч�ʸ��� ������ǿ
//console.log('before tick');
//setTimeout(function () {
//   console.log(111)
//},0);
//process.nextTick(function(){
//    console.log(222);
//});
//console.log('after tick');


//ChildProcess ��һ��ʱ�䷢����
//var child_process = require('child_process');
//var util = require('util');
//var cmd = util.format('xcopy','a','b');
//child_process.exec(cmd);


//ͨ��spawn ���� ����һ���ӽ���
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