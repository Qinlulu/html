/**
 * Created by zhangbowen on 2016/10/10.
 */
define([], function () {
    function getDefaultHeader() {
        var defaultHeader = {};
        defaultHeader["terminal"] = "3";
        var userInfo;
        var cookieUser = $.cookie("loginInfo");
        if (cookieUser) {
            userInfo = JSON.parse(cookieUser);
            defaultHeader["userId"] = userInfo.id;
            defaultHeader["token"] = userInfo.token;
        }
        return JSON.stringify(defaultHeader)
    }
    function parseBody(body){
        if(body){
            return JSON.stringify(body);
        }
        return body;
    }

    var baseUrl = 'http://119.253.37.13:9090';//'http://114.55.5.90:9095/phoneMobile.do?'V1
    return ['$http', function ($http) {
        return {
            get: function (url) {
                return $http.get(url);
            },post: function (act,param) {
				param = param?param:{};
            	param["act"]=act;
            	return $http({
					method:'POST',
					url:baseUrl+act,
					params:param
            	});
            },postFormData: function (act,param) {
				param = param?param:{};
				var formData = new FormData();
				for(var i in param){
					formData.append(i, param[i]); 
				}
            	return $http({
					method:'POST',
					url:baseUrl+'?act='+act,
					data: formData,
					headers: {'Content-Type':undefined},
		            transformRequest: angular.identity 
            	});
            }
        }
    }];
});