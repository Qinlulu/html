/**
 * Created by Administrator on 2016/12/6 0006.
 */

/*
创建子进程
1、使用cmd 终端命令实现复制文件夹功能
判断文件存在不存在
存在 使用child_process.exec方法 执行xcopy 命令 复制文件
不存在 创建目录 并 使用child_process.exec方法 执行xcopy 命令 复制文件
*/
var fs=require("fs")
var child=require("child_process");

fs.readdir("./b",function(err,data){
    if(err){
        fs.mkdir("./b",function(err,data){
            if(err) return console.error(err)
            child.exec("xcopy a b")
        })
    }
    child.exec("xcopy a b")

})

