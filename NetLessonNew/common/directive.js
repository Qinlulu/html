/**
 * Created by zhangbowen on 2016/10/10.
 */
define([], function () {
    return {
        list: {
            "back": function () {
                return {
                    replace: true,

                    link: function (scope, element, attrs) {
                        var $back = $('<span class="backToIndex"></span>');
                        //事件绑定
                        $back.on('tap', function () {
                            if (history.go(-1)) {
                                history.go(-1);
                            } else {
                                window.location.href = "http://m.sparke.cn"
                            }
                        });
                        var $title = $('<p class="myOrderTitle">' + attrs.title + '</p>');
                        $(element).parent().prepend($title).prepend($back);
                        $(element).remove();

                    }
                };
            },
//			'getOrder': function() {
//				return{
//					link: function()
//				}
//			},
            'repeatFinish': function () {
                return {
                    link: function (scope, element, attr) {
                        if (scope.$last == true) {
                            scope.$eval(attr.repeatFinish)
                        }
                    }
                }
            },
            'pagerLoader': function () {
                return {
                    link: function (scope, element, attrs) {
                        element[0].innerHTML = ' <div class="loader_container">' +
                            '<div class="loader">' +
                            '<div class="dot"></div>' +
                            '<div class="dot"></div>' +
                            '<div class="dot"></div>' +
                            '<div class="dot"></div>' +
                            '<div class="dot"></div>' +
                            '</div>' +
                            '</div>';
                    }
                };
            },
            'compileHtml': ['$compile', '$sce', function ($compile, $sce) {
                return {
                    replace: true,
                    link: function (scope, ele, attrs) {
                        scope.$watch(function () {
                                return scope.$eval(attrs.ngBindHtml);
                            },
                            function (html) {
                                if (html) {
                                    ele.html($sce.getTrustedHtml(html));
                                    $compile(ele.contents())(scope);
                                }
                            });
                    }
                };
            }],
            'articleHeader': function () {
                return {
                    restrict: 'A',
                    replace: true,
                    link: function (scope, ele, attrs) {
                        var $ele = $(ele);
                        var oldBgColor = $ele.css('backgroundColor');
                        var changeColor = 'rgb(255, 255, 255)';
                        var eleHeight = ele[0].offsetHeight;
                        var content = $ele.siblings(".content");
                        var fontColorEles = $ele.find('.button-link');
                        var changeFontColor = function (color) {
                            for (var i = 0; i < fontColorEles.length; i++) {
                                $(fontColorEles[i]).css('color', color);
                            }
                        }
                        content.on("scroll", function () {
                            if (content.scrollTop() >= eleHeight && !($ele.css("backgroundColor") == changeColor)) {
                                $ele.css("backgroundColor", changeColor);
                                $("h1[class='title']").show();
                                changeFontColor('#FF364F');
                            } else if (content.scrollTop() < eleHeight && $ele.css("backgroundColor") == changeColor) {
                                $ele.css("backgroundColor", oldBgColor);
                                changeFontColor('white');
                                $("h1[class='title']").hide();
                            }
                        });
                    }
                };
            },
            'dateFormatter': function () {
                return {
                    link: function (scope, element, attrs) {
                        scope.$watch(function () {
                            element[0].innerHTML = new Date(element[0].innerHTML).format(attrs.dateFormatter);
                        })
                    }
                };
            },
            'slideBt': function () {
                return {
                    link: function (scope, element, attrs) {
                        $(element).find(".btn-slide").on("click", function () {
                            $(".indexList ul li a").css({"color": "#404040", "borderColor": "#999"});
                            $(".indexList ul li a:contains('" + localStorage.getItem('levelTitle') + "')").css({
                                "color": "#23a1ad",
                                "borderColor": "#23a1ad"
                            });
                            $(".indexList").slideToggle("normal");
                            $(".arrowBox").toggleClass("arrowChange");
                            return false;
                        });

                    }
                };
            },
            'idengerBanner': function ($timeout) {
                return {
                    template: '<div class="banner swiper-container1">'+
                        '<ul class="index_pics swiper-wrapper">'+
                            '<li class="swiper-slide" ng-repeat="i in imgUrl"><img ng-src={{i.url}} alt=""></li>'+
                        '</ul>'+
                        '<div class="lide_icon swiper-pagination1"></div></div>',
                    scope:{
                        imgUrl:'='
                    },
                    controller:function ($scope) {

                    },
                    link:function (scope,ele,attr) {

                        $timeout(function () {
                            new Swiper(ele.find('.banner')[0],{
                                pagination:'.swiper-pagination1',
                                paginationClickable:true,
                                autoplayDisableOnInteraction: false,
                                autoplay:1500,
                                loop: true,
                                preventClicks : false,
                                noSwiping : true,
                                effect : 'flip',
                                'onTouchEnd':function(swiper){
                                    var ind=swiper.activeIndex;
                                }
                            });

                        },100);

                    }
                }
            }
        }
    };
});