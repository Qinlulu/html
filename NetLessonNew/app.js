/**
 * Created by zhangbowen on 2016/10/9.
 */
var dep = [
    'routes',
    'loader',
    'angularAMD',
    'ui-router',
    'common/directive',
    'common/httpFactory',
    'common/pagerFactory',
    'common/toolsFactory',
    'jquery',
    'layer',
    'jqCookie',
    'infinite-scroll',
    'md5',
    'touch',
    'flexible',
	'jsKincode',
	'citySelect2',
	'city2',
	
];
define(dep, function (config, loader, angularAMD, uiRouter, directives, httpFactory, pagerFactory,toolsFactory) {
    var app = angular.module('app', ['infinite-scroll', 'ui.router']);
    app.factory('httpInterceptor', function ($q,$location) {
        return {
        	'response': function(res){
        		if(res.data && res.data.succeed && res.data.succeed!='000'){
        			layer.msg(res.data.sucInfo);

        			return $q.reject(res);
        		}
      			return res;
    		},
            'responseError': function (response) {
				layer.msg('网络异常');
                return $q.reject(response);
            }
        };
    });
    app.factory('$httpApi', httpFactory);
    app.factory('$pager', pagerFactory);
    app.factory('$utils', toolsFactory);
    app.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
        $httpProvider.interceptors.push('httpInterceptor');
        if (config.routes != undefined) {
            angular.forEach(config.routes, function (route, path) {
                $stateProvider.state(path, {
                    templateUrl: "./modules/" + route.templateUrl,
                    url: route.url,
                    params: {
                    	'login': route.login,
                    	'title': route.title?route.title:"",
                    	'desc': route.desc?route.desc:"",
                    	'keywords': route.keywords?route.keywords:""
                    },
                    resolve: loader(route.dependencies),
                    abstract: route.abstract | false
                });
            });
        }
        // 默认路由
        if (config.defaultRoute != undefined) {
            $urlRouterProvider.when("", config.defaultRoute).otherwise(config.defaultRoute);
        }

    });
    angular.forEach(directives.list, function (directFun, name) {
        app.directive(name, directFun);
    });
    app.run(['$rootScope', '$templateCache','$location','$utils', function ($rootScope, $templateCache,$location,$utils) {
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        	$rootScope.title=toState.params.title;
        	$rootScope.desc=toState.params.desc;
        	$rootScope.keywords=toState.params.keywords;
            if (toState.params.login == true) {
                    if ($utils.UserInfo().unLogin()) {
                        $location.path("/login");
                    }
            }
        });
    }]);

    return angularAMD.bootstrap(app);
});
