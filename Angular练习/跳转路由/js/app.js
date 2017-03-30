angular.module("myapp")
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home")
        $stateProvider
            .state("home", {
                url: "/home",
                templateUrl: "pages/style1.html",
                controller:"mystr"
            })
            .state("list", {
                url: "/list?id",
                templateUrl: "pages/style2.html",
                controller:"mystrs"
            })
    })

    .controller("mystr",function($state,$scope){
        $scope.go=function() {
            $state.go("list",{
                id:"ssss"
            })
           /* $scope.$on("$stateChangeStart", function (a, b, c, d) {
                console.log(a)//
                console.log(b)//下一个的路由信息
                console.log(c)//下一个的参数
                console.log(d)//上一个的路由信息
            })*/

        }
})