// 插件的封装，不去扩展$,但是依然依据jquery来封装
;(function(_){

	window.ui=_;

})((function(_){

	function getopt(){
		return{
			width:300,
			height:200,
			background:'#eee',
			top:'',
			left:'',
			id:'',
			text:'',
			isdrag:true,
			buttons:null
		}
	};

	function Dialog(args){
		var self=this;
		var set=$.extend({},getopt(),args);

		function creat(){
			var newBox=$('<div id="'+set.id+'">'+set.text+'</div>').appendTo('body');
			newBox.css({'width':set.width,'height':set.height,'background':set.background,'position':'absolute','left':set.left,'top':set.top,'text-align':'center','line-height':set.height+'px','color':'#fff'});
			if(set.buttons){
				newBox.append('<span class="close">X</span>')
			}
			if(set.isdrag){
				self.move();
			}
			$('.close').on('click',function(){
				if(typeof self.die=='function'){
					self.die();
				}
			})
		};

		function die(){
			$('#'+set.id).remove();
		};

		function move(){
			$('#'+set.id).on('mousedown',function(e){
				var star={
					x:e.pageX-$(this).offset().left,
					y:e.pageY-$(this).offset().top
				}
				var that=$(this);
				$(document).on('mousemove',function(e){
					var mov={
						x:e.pageX-star.x,
						y:e.pageY-star.y
					}

					that.css({'left':mov.x,'top':mov.y})
				}).on('mouseup',function(){
					$(this).off('mousemove');
				})
			})
		}

		this.creat=creat;
		this.die=die;
		this.move=move;

		this.creat();

	}


	function dialog(_){
		// console.log(1)
		return new Dialog(_)

	}

	return {
		dialog:dialog
	}
})($))

// ;(function($){
// 	$.fn.dialog=function(opt){
// 		var set=$.extend({},{
// 			width:300,
// 			height:200,
// 			background:'#eee',
// 			top:'',
// 			left:'',
// 			id:'',
// 			text:'',
// 			isdrag:true
// 		},opt);

// 		$(this).on('click',function(){
// 			// console.log(1)
// 			var newBox=$('<div id="'+set.id+'">'+set.text+'<span class="close">X</span></div>').appendTo('body');
// 			newBox.css({'width':set.width,'height':set.height,'background':set.background,'position':'absolute','left':set.left,'top':set.top,'text-align':'center','line-height':set.height+'px','color':'#fff'})
// 			$('.close').on('click',function(){
// 				console.log(1)
// 				$(this).parent().remove();
// 			})
// 			if(set.isdrag){
// 				move(newBox)
// 			}

// 		})

	// 	function move(newBox){
	// 		newBox.on('mousedown',function(e){
	// 			var star={
	// 				x:e.pageX-$(this).offset().left,
	// 				y:e.pageY-$(this).offset().top
	// 			}
	// 			var that=$(this);
	// 			$(document).on('mousemove',function(e){
	// 				var mov={
	// 					x:e.pageX-star.x,
	// 					y:e.pageY-star.y
	// 				}

	// 				that.css({'left':mov.x,'top':mov.y})
	// 			}).on('mouseup',function(){
	// 				$(this).off('mousemove');
	// 			})
	// 		})
	// 	}
	// }

// })($)
