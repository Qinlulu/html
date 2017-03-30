angular.module("myapp")
    .directive("canvass", function () {
        return {
            restrict: "AEC",
            template: "<canvas width='40' height='40' id='myCanvas'></canvas>",
            replace: true,
            scope: {
                amount:"=",
                usableAmount:"="
            },
            controller:function($scope){

            },
            link: function (scope, ele, attr) {
                var ctx = ele[0].getContext("2d");

                //总数-已买的  处于 总数 *360
                num=(scope.amount-scope.usableAmount)/scope.amount*360
                ctx.beginPath()
                ctx.strokeStyle = "yellow"
                ctx.lineWidth = "5"
                ctx.arc(20, 20, 17, Math.PI * (270 / 180), Math.PI * (num / 270), false);
                ctx.stroke();
                ctx.beginPath()
                ctx.fillStyle = "#ED5858"
                ctx.arc(20, 20, 15, 0, Math.PI * 2, false);
                ctx.fill();
            }
        }
    })