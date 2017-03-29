/**
 * Created by Administrator on 2016/12/17.
 */

var mysql=require("mysql");

var option={
    host:"127.0.0.1",
    user:"root",
    password:"111111",
    database:"cm1501d"
}

var connection=mysql.createConnection(option)
module.exports=function(username,password,req,res){
    var $query="select * from cm1501d where user='"+username+"'and password='"+password+"'"

        connection.query($query,function(err,datas){
            if(datas.length){
                //var data={code:"0",err:"",data:rows[0]}
                //res.json(JSON.parse(datas));
                console.log()
                res.render("forms",{
                    user:datas[0].user,
                    age:datas[0].age,
                    Trad:datas[0].Trad,
                    job:datas[0].job
                })
            }else{
               // var data={code:"1",err:""}
                //res.json("抱歉没有此信息");
               // res.render("index",{error:"抱歉没有此信息"})
                req.flash("error","抱歉没有此信息")
                res.redirect("/");
            }
        })
}
