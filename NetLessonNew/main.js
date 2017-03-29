/**
 * Created by zhangbowen on 2016/10/9.
 */
var baseUrl = 'static/js/';

require.config({    //配置模块
    paths: {
        'app': 'app',
        'flexible': baseUrl + 'flexible',
        'jquery': baseUrl + 'jquery-1.11.1.min',
        'angular': baseUrl + 'angular.min',
        'ui-router': baseUrl + 'angular-ui-router.min',
        'angularAMD': baseUrl + 'angularAMD',
        'jqCookie': baseUrl + 'jquery.cookie',
        'layer': baseUrl + 'layer/layer',
        'infinite-scroll': baseUrl + 'ng-infinite-scroll',
        'md5': baseUrl + 'md5',
        'touch': baseUrl + 'touch-0.2.12.min',
        'jsKincode': baseUrl + 'jsKincode',
        'citySelect2': baseUrl + 'citySelect2',
        'city2': baseUrl + 'city2'
    },
    shim: {   //处理没有遵守requirejs规范的js库
        'flexible': {
            exports: 'flexible'
        },
        'touch': {
            exports: 'touch'
        },
        'ui-router': ['angular'],
        'angularAMD': ['angular'],
        'angular': {
            exports: 'angular'
        },
        'jqCookie': ['jquery'],
        'infinite-scroll': ['jquery', 'angular'],
        'layer': {
            deps: ["jquery"],
            exports: 'layer'
        }
    },
    deps: ['app']
});
require(['layer'], function (layer) {
    layer.config({
        path: 'static/js/layer/'      //layer.js所在的目录，可以是绝对目录，也可以是相对目录
    });
});
