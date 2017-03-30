angular.module("myapp")
    .controller("mystr", function ($scope, $state, $http) {
        $http.get("./js/data.json")
            .success(function (data) {
                $scope.datas = data.data.list
            })

       /* var footer=document.querySelectorAll(".footer i")
        var footers=document.querySelectorAll(".footer div")*/
        /*for (var i = 0; i < footers.length; i++) {

            footers[i].onclick = (function(i){
                for (var k = 0; k < footer.length; k++) {
                    footer[k].className = ""
                }
                return function(){
                    footer[i].className = "on"
                };
            })(i)

        }*/

    })
    .controller("index",function($scope,$state){
        $state.go("index.shouye")
    })
    .controller("shouye",function ($scope) {
        setTimeout(function () {
            new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                autoplay: 2000
            });
        }, 0)
    })
    .controller("licai",function ($scope, $state) {
        $state.go("licai.zhai")
        $scope.m=null
        $scope.k=null
        $scope.add=function(){
            $scope.age=true
            var lis=document.querySelectorAll(".left li")
            for (var i = 0; i < lis.length; i++) {
                lis[i].onclick = function () {
                    var is=this. querySelector("i").innerHTML
                      var str=this. querySelector("strong").innerHTML
                    if(isNaN(is)) is=null
                    if(isNaN(str)) str=null
                        $scope.m=is
                        $scope.k=str
                    for (var k = 0; k < lis.length; k++) {
                        lis[k].className = ""
                    }
                    this.className = "diu"
                }
            }
        }

        $scope.left=function(){
            $scope.age=false
        }

    })

    .filter("firt",function(){
        return function(data,m){
            var arr=[]
            for(var i=0;i<data.length;i++){
                if(!m){
                    arr.push(data[i])
                }
                if(data[i].duration==m){
                    arr.push(data[i])
                }
            }
            return arr;
        }
    })

    .filter("fit",function(){
        return function(data,k){
            var arr=[]
            for(var i=0;i<data.length;i++){
                if(!k){
                    arr.push(data[i])
                }
                if(data[i].pid==k){
                    arr.push(data[i])
                }
            }
            return arr;
        }
    })
