var _$={
	ajax:function(opt){

		if(!opt.u)  return;

		var xhr=null,thisp='';

		if(typeof opt.pr=='object'){
			for(var i in opt.pr){
				thisp+=i+'='+opt.pr[i]+'&';
			}

			thisp=thisp.substr(0,thisp.length-1);
		}

		var thisType=opt.async||true;

		if(window.XMlHttpRequest){
			xhr=new XMlHttpRequest();
		}else{
			xhr=new ActiveXObject();
		}

		if(opt.type=='get'){
			xhr.open(opt.u+"?"+thisp,thisType);
			xhr.send();
		}else if(opt.type=='post'){
			xhr.open(opt.u,thisType);
			xhr.send(thisp);
		}


		xhr.onreadystatechange=function(){
			if(xhr.readyState==4&&xhr.status==200){
				if(typeof opt.cb=='function'){
					cb(xhr.responseText);
				}
			}
		}

	}

}