define(['app'], function (app) {
    app.controller('mainController', function ($scope,$http, $state, $stateParams, $pager, $httpApi, $utils, $rootScope) {
        //初始化banner数据
        var imgapi = 'http://119.253.37.13:9090/carousl?type=NETWORK_CAROUSEL';
        $httpApi.get('json/list.json' || imgapi)
            .success(function (data) {
                $scope.imgUrl = data.imgUrl;
            });    
        
//      $http({
//			url:'http://192.168.10.144:8080/carousl?',
//			method:'GET',
//			params:{"type": "NETWORK_CAROUSEL"}
//		}).success(function(data,header,config,status){
//			//响应成功
//			console.log(data)
//			}).error(function(data,header,config,status){
//			//处理响应失败
//			});
//      //相关信息
    	$scope.Txt = ["四级", "六级", "考研"];
        $scope.title = [
            {
                "ncLevel": "cet4",
                "ncLevelType": "system_course",
                "pageIndex": 0,
                "pageSize": 5
            },
            {
                "ncLevel": "cet6",
                "ncLevelType": "special_course",
                "pageIndex": 1,
                "pageSize": 5
            },
            {
                "ncLevel": "gct",
                "ncLevelType": "wei_course",
                "pageIndex": 2,
                "pageSize": 5
            }
        ];
         //默认请求
 		$httpApi
		.post('/api/network/index_course_list', $scope.title[0])
		.success( function (d) {
			console.log(d)
			if(d.result.code==1000){
				$rootScope.list=d.body.courseList;
			}	
		})
        //点击通过ncLevel参数请求
        $scope.tabTitle=function(item){
     		
     		$rootScope.ncLevel=item.ncLevel;
        	let _para = {
        		ncLevel:item.ncLevel,
        		ncLevelType:item.ncLevelType,
        		pageIndex:item.pageIndex,
        		pageSize:5
        	};
//      	console.log(_para)
        	$httpApi
        		.post('/api/network/index_course_list', _para)
        		.success( function (d) {
        			console.log(d)
        			if(d.result.code==1000){
        				$rootScope.list=d.body.courseList;
        			}
        		})
        }
       
			
		/*播放视频*/
		$scope.playVideo = function(link) {
			 var videoTag = document.createElement('script');
			 videoTag.src = 'http://p.bokecc.com/player?vid=' + link + '&siteid=32BF7C642471CE36&autoStart=false&width=100%&playerid=591F33C9E57F29D4&playertype=1';
			 videoTag.type = 'text/javascript';
			 $('.videoTop').html(videoTag);
			 $scope.playing = true;
		 }
		$scope.toTop=function(){
			 let e = $(".toTop");  
                $(window).scroll(function () {                 //滚动时触发  
                    if ($(document).scrollTop() > 10)         //获取滚动条到顶部的垂直高度,到相对顶部300px高度显示  
                        e.fadeIn(300)  
                    else  
                        e.fadeOut(200);  
                });  
                /*点击回到顶部*/  
                e.click(function () {  
                    $('html, body').animate({                 //添加animate动画效果  
                        scrollTop: 0  
                    }, 500);  
                });  
		}
    })
});

//sessionStorage.setItem("demokey", "http://blog.itjeek.com");//