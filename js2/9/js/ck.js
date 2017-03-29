var  input=document.getElementsByTagName('input'),
	 p=document.getElementsByTagName('p'),
	 user=input[0],
	 pwd=input[1],
	 user_p=p[0],
	 pwd_p=p[1],
	 em=document.getElementsByTagName('em'),
	 count=document.getElementById('count');



//当获取焦点的时候 p显示
user.onfocus=function(){
	  user_p.style.display='block';
	  user_p.innerHTML='<i class="ati"></i>5-25个字符，一个汉字为两个字符，推荐使用中文会员名'
}
//当失去焦点的时候，
//如果内容为空
//如果存在非法字符 
//如果长度不在范围内  5 -15
//否则正确
user.onblur=function(){
   var reg=/^[\w\u4e00-\u9fa5]{5,15}$/;
   if(user.value==''){
   	user_p.innerHTML='<i class="err"></i>内容不能为空'
   }else if(!reg.test(user.value)){
     user_p.innerHTML='<i class="err"></i>存在非法字符或者长度不在范围内 '
   }else{
   	user_p.innerHTML='<i class="ok"></i>正确'
   }
}


//当获取焦点的时候 p显示

pwd.onfocus=function(){
	pwd_p.style.display='block';
	pwd_p.innerHTML='<i class="ati"></i>5-25个字符'


}
//当失去焦点的时候
//不能为空
//非法字符或长度不在范围内
//不能全是数字
//不能全是字母
//正确
pwd.onblur=function(){
	var  reg=/^\w{5,15}$/
	
	var  reg1=/[^0-9]/

	//var  str='dhjdjkdfkldf'
	var reg2=/[^a-zA-Z]/
     
	if(pwd.value==""){
		pwd_p.innerHTML='<i class="err"></i>内容不能为空';
	}else if(!reg.test(pwd.value)){
		pwd_p.innerHTML='<i class="err"></i>存在非法字符或者长度不在范围内 '
	}else if(!reg1.test(pwd.value)){
		pwd_p.innerHTML='<i class="err"></i>不能全是数字';
	}else if(!reg2.test(pwd.value)){
		pwd_p.innerHTML='<i class="err"></i>不能全是字母';
	}else{
		pwd_p.innerHTML='<i class="ok"></i>正确';
	}


}

//强度判断

   pwd.onkeyup=function(){
   	var  pwdL=pwd.value.length;
   	// 1-5  em0
   	//5-10  em0 em1
   	//>10   em0  em1 em2
   	if(pwdL>5){
   		em[1].className='active';
   	}else{
   		em[1].className='';
   	}

   	if(pwdL>10){
   		em[2].className="active";
   	}else{
   		em[2].className=''
   	}




  /* 	if(pwdL>0 && pwdL<=5){
   		em[0].className='active';
   		em[1].className='';
   		em[2].className='';
   	}


   	if(pwdL>5 && pwdL<=10){
   		em[0].className='active';
   		em[1].className='active';
   		em[2].className='';
   	}

   	if(pwdL>10){
   		em[0].className='active';
   		em[1].className='active';
   		em[2].className='active';
   	}*/

   }

user.onkeyup=function(){
	count.style.display='inline-block';

	var arr=user.value
	var reg=/[^\x00-\xff]/g  //全局  // 双字节
	sum=arr.replace(reg,'**').length
	count.innerHTML=sum+'个字符'
}