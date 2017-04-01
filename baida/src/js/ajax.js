function ajax(obj){
    obj = obj || {};
    obj.method = obj.method|| 'GET';
    obj.url = obj.url || '';
    obj.data = obj.data || null;
    obj.success = obj.success || function () {};


    var xml=new XMLHttpRequest()

    if(obj.method=="GET"){
        xml.open( obj.method,obj.url+"?"+obj.data,true)
        xml.send(null);
    }else if(obj.method=="POST"){
        xml.open(obj.method,obj.url,true)
        xml.send(postData);
    }

    xml.onreadystatechange=function(){
        if (xml.readyState == 4 && xml.status == 200) {
            obj.success(JSON.parse(xml.responseText));
         }
    }


}

export { ajax }