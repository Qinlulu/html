/**
 * Created by Administrator on 2016/12/1 0001.
 */
var cut=require("./cut.js")()
var fruit=require("./fruit.js")()


function Cut(cut,fruit){
    this.name=cut;
    this.fruit=fruit;

}
Cut.prototype.show=function(){
    console.log("我是"+this.name+"我爱吃"+this.fruit)
}
var p=new Cut(cut,fruit);
p.show()
/*
var a=name()
console.log("我是"+a)*/
