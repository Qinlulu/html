/**
 * Created by Administrator on 2016/12/13.
 */

var mysql=require("mysql");

var connection=mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"111111",
    database:"1501d"
});

module.exports=function(username,password,res){

   /* console.log(username)
    console.log(password)*/
    var quewry ="select * from yanzheng  where user='" + username +"' and password='" + password + "'";
   // var quewry="select * from yanzheng"
    //var quewry = 'select * from yanzheng where user=\'' + username + '\' and password=\'' + password + '\'';

    connection.query(quewry,function(err,datas){
        if(err) throw err;
        if(datas.length){
         res.json(datas)
          //console.log(datas)
        }else{
            res.json("抱歉  找不到信息")
            //console.log("sssno")
        }

        //console.log(datas)
})
    connection.end()
}
