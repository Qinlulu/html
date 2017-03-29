define(['app'],function(app){
	app.controller('lessonTypeController',function($scope, $http,$state, $stateParams, $pager, $httpApi, $utils){
		$scope.arr=[1,2,3,4,5,,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
		$scope.arr1=['一','二','三','四','五','六'];
		$scope.arr2=['壹','贰','叁','撕','伍','陆'];
		var courseType=$stateParams.courseType;
		var kinds = ['cet4', 'cet6', 'gct'];
		var title=['四级','六级','考研'];
		localStorage.setItem('courseType', courseType);
		localStorage.setItem('level', kinds[courseType]);
		localStorage.setItem('levelTitle', title[courseType]);
		$('.mTabul li').eq(courseType).addClass('underline').siblings().removeClass('underline')
		if(courseType==0){
			$scope.item=$scope.arr;
		}else if(courseType==1){
			$scope.item=$scope.arr1;
		}else{
			$scope.item=$scope.arr2;
		}
		/*var pager = new $pager({
				       params:{
				       }
	       });
       $scope.pager = pager;*/
       $http({
	       	url:"json/list.json",
	       	method:"GET",
		    param:{
			    "userId": "xxxxxxxxxxxx",
			    "ncLevel": "cet4", 
			    "ncLevelType": "system_course", 
			    "pageIndex": 2, 
			    "pageSize": 10
				}
       }).success(function(data){
//     	console.log(data.courseList)
       		$scope.info=data.courseList;
       })
       $('.vTabol li').on('tap',function(){
       	var num=$(this).index();
       	$('.videoList').eq(num).show().siblings().hide();
       	$('.vTabol li').eq(num).addClass('underline').siblings().removeClass('underline');
       })
	})
})