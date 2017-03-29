/**
 * Created by zhangbowen on 2016/10/9.
 */
define([], function () {
    return {
        defaultRoute: 'main/videoList/0',
        routes: {
            'main': { //level
                templateUrl: 'main/main.html',
                url: "/main",
                dependencies: ['modules/main/mainController','static/js/swiper']
            },
            'main.videoList': {
                templateUrl: 'video/video-list.html',
                url: '/videoList/:courseType',
                dependencies: ['modules/video/videoListController']
            },
            'main.videoInfo': {
                templateUrl: 'video/listItem.html',
                url: '/listItem/:courseType',
                dependencies: ['modules/video/videoInfoController']
            },
            'home': {
                templateUrl: 'home/home.html',
                url: '/home',
                dependencies: ['modules/home/homeController']
            },
            'user': {
                templateUrl: 'user/user.html',
                url: '/user',
                dependencies: ['modules/user/userController']
            },
            'account': {//我的账户
                templateUrl: 'account/account.html',
                url: '/account',
                dependencies: ['modules/account/accountController']
            },
            'myorder': {//我的订单
                templateUrl: 'myorder/myorder.html',
                url: '/myorder',
                dependencies: ['modules/myorder/myorderController']
            },
            'mylesson': {//我的课程
                templateUrl: 'mylesson/mylesson.html',
                url: '/mylesson',
                dependencies: ['modules/mylesson/mylessonController']
            },
            'lessonType': {//我的课堂
                templateUrl: 'lessonType/lessonType.html',
                url: '/lessonType',
                dependencies: ['modules/lessonType/lessonTypeController']
            },
            'myaddress': {
                templateUrl: 'myaddress/myaddress.html',
                url: '/myaddress',
                dependencies: ['modules/myaddress/myaddressController']
            }
        }
    };
});