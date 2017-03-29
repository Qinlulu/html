;(function(){

 $.fn.side=function(pat){
        function obj(){
            down:"";
            move:"";
            up:"";
            newclass:"";
            addclass:"";
            removeclass:"";

        }
        var set=$.extend({},obj(),pat)
        $(this).on(set.down,function(e){
            that=$(this)
        //求出盒子对浏览左边的距离
        //求出盒子对浏览上面的距离
        var down={
            x:0,
            y:0
        }
        down.x=that.offset().left
        down.y=that.offset().top

        that.attr("class",set.newclass)
        that.css({"left":down.x,"top":down.y})

        //创建新的盒子 插入按下的盒子
         $("<div class='"+set.removeclass+"'></div>").insertBefore(that)


         //求出按下时,鼠标距离盒子的距离
         var mous={
            x:0,
            y:0
         }

         mous.x=e.pageX-down.x
         mous.y=e.pageY-down.y

        $(document).on(set.move,function(e){

            //求出移动时候的定位距离
            that.css({"left":e.pageX-mous.x,"top":e.pageY-mous.y})

            var boxs=$("."+set.addclass)
            boxs.each(function(){
                 var thatt=$(this),
                   thatL=thatt.offset().left,
                    thatW=thatt.outerWidth()/2;
                   thatcen=thatL+thatW;
                   //移动的盒子的右面的宽
                  var newRight=that.offset().left+that.outerWidth()
                  //console.log(newRight)
                  var first=boxs.first()
                  var firstcen=first.offset().left+first.outerWidth()/2

                if(that.offset().left<=firstcen){
                      $("."+set.removeclass).insertBefore(first)
                  }

                   if(newRight>=thatcen){
                         $("."+set.removeclass).insertAfter(thatt)
                    }

            })


        }).on(set.up,function(){
            $(document).off(set.move)
            that.attr("class",set.addclass)
            that.insertBefore($("."+set.removeclass))
            $("."+set.removeclass).remove()

        })
        })
    }
})($)