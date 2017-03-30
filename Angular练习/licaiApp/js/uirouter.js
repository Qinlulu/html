angular.module("myapp")

    .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/index")
            $stateProvider
            .state("index", {
                url: "/index",
                templateUrl: "index.html",
                controller: "index"
            })
            .state("index.shouye", {
                url: "/shouye",
                templateUrl: "page/shouye.html",
                controller: "shouye"
            })
            .state("licai", {
                url: "/licai",
                templateUrl: "page/licai.html",
                controller: "licai"
            })
            .state("licai.zhai", {
                url: "/zhai",
                templateUrl: "page/zhai.html"

            })
            .state("licai.jijin", {
                url: "/jijin",
                templateUrl: "page/jijin.html"
            })

            .state("room", {
                url: "/room",
                templateUrl: "page/room.html"
            })
            .state("filr", {
                url: "/filr",
                templateUrl: "page/filr.html"
            })

    })


