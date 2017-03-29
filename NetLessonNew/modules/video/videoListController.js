define(['app'], function (app) {
	app.controller('videoListController', function ($scope, $http, $state, $stateParams, $pager, $httpApi, $utils,$rootScope,$timeout) {
		$timeout(d=>{
			$scope.courseData=$rootScope.list;
			$scope.vTabActive=false;
			$scope.vTabFn=function(ind){
				if(ind==0){
					console.log(ind);
					$scope.vTabActive=false;
					$(".videoList").eq(ind).show().siblings().hide()
						
				}else if(ind==1){
					console.log(ind)
					$(".videoList").eq(ind).show().siblings().hide()
//					console.log($rootScope.ncLevel)
					$scope.vTabActive=true;
					let _para = {
		        		
		        		ncLevelType:"public_course",
		        		pageIndex:1,
		        		pageSize:5
		        	};
					if($rootScope.ncLevel=="undefined"){
						_para.ncLevel='ct4',
			        	$httpApi
		        		.post('/api/network/index_course_list', _para)
		        		.success( function (d) {
		        			console.log(d)
		        			if(d.result.code==1000){
		        				$rootScope.list=d.body.courseList;
		        			}
		        		})
					}else{
						_para.ncLevel=$rootScope.ncLevel;
			        	console.log($rootScope.ncLevel)
			        	$httpApi
		        		.post('/api/network/index_course_list', _para)
		        		.success( function (d) {
		        			console.log(d)
		        			if(d.result.code==1000){
		        				$rootScope.list=d.body.courseList;
		        			}
		        		})
					}
				}
			}
		},10)
		$scope.or=function(vl){
        	if(vl!=""){
        		return true;
        	}else{
        		return false;
        	}
        };
	})


})












/*define(['app'], function (app) {
    app.controller('videoListController', function ($scope, $http, $state, $stateParams, $pager, $httpApi, $utils) {
        $scope.vTabActive = true;
        $scope.vTabFn = function () {
            $scope.vTabActive = !$scope.vTabActive;
			//默认加载
        var param = {
            "ncLevel": "cet4",
            "ncLevelType": "system_course",
            "pageIndex": 0,
            "pageSize": 5
        };
        var cacheData =[//缓存数据
            null,null,null
        ];

        //获取网课首页列表
        $httpApi
            .post('/api/network/index_course_list', param)
            .success(function (data) {
            	console.log(data)
                cacheData[0] = data;
                $scope.courseData = data.body.courseList;
            });
        };
        $scope.vTabFn1 = function () {
            $scope.vTabActive = !$scope.vTabActive;
			//默认加载
        var param = {
            "ncLevel": "cet4",
            "ncLevelType": "public_course",
            "pageIndex": 0,
            "pageSize": 5
        };
        var cacheData =[//缓存数据
            null,null,null
        ];

        //获取网课首页列表
        $httpApi
            .post('/api/network/index_course_list', param)
            .success(function (data) {
            	console.log(data)
                cacheData[0] = data;
                $scope.courseData = data.body.courseList;
            });
        };
        $scope.or=function(vl){
        	if(vl!=""){
        		return true;
        	}else{
        		return false;
        	}
        }
        $scope.limit=function(w,h){
        	if(w=="0"||h=="1"){
        		return true;
        	}else{
        		return false;
        	}
        }

    });
    
});
*/