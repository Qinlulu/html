import { Swiper } from './swiper';
import { ajax } from './ajax';
import { Banner } from './shouye';
import { City } from './city';
import { Citys } from './citys';
import { Times } from './time';
import { Cons } from './conts';
import { SlideSelector , element } from './slideSelector';
//import { yuding } from './yuding';


ajax({
    url:"../../src/json/img.json",
    success:function(data){
        new Banner(data)
        setTimeout(function(){
            new Swiper(".banner",{
                autoplay:1000,
                loop:true
            })
            new Swiper(".banners",{
                autoplay:1000,
                loop:true
            })
            let matter=document.querySelector(".matter")
            let banners=matter.querySelector(".banners")
            banners.onclick=function(){
               let zhe=document.querySelector('.zhe')
                 zhe.style.display="block"
                 new Swiper(".lunbo",{
                 autoplay:1000,
                 loop:true
                 })

                zhe.onclick=function(){
                    zhe.style.display="none"
                }
            }

        },0)



    }
})


ajax({
    url:"../../src/json/hotcity.json",
    success:function(data){
       new City(data)
    }
})

ajax({
    url:"../../src/json/cities.json",
    success:function(data){
        new Citys(data)
    }
})
new Times()

let btn=document.querySelector(".btn")
let donghua=document.querySelector(".donghua")
 
 btn.onclick=function(){
 	let cont=document.querySelector(".contts")  
 	cont.className="sho"
 	donghua.style.display="block"
	 	ajax({
		    url:"../../src/json/hotell.json",
		    success:function(data){
		        new Cons(data.data)
		        donghua.style.display="none"

                let list_main = document.querySelector('.sho .dls');
                let list_mains = list_main.querySelector('.sex');

                list_main.onscroll=function(){
                    if(list_main.offsetHeight*1+this.scrollTop*1>list_mains.offsetHeight-500*1){
                       alert("正在加载更多")
                    }
                }
            }
		})










        
}

let selector = new SlideSelector();
element('.room-count').addEventListener('click',function () {
    let ele = this.querySelector('.icon');
    selector.show({
        list:[1,2,3,4,5,6],
        callback:function (data) {
            ele.innerHTML = data;
            let info_list =element('.fill-order-info-box');
            let str ='';

            for(let i=0;i<data*1;i++){
                str+= `<div class="fill-order-info"><p class="ks-clear">
                    <span class="left">姓名</span>
                    <span class="right"><input type="text" /></span></p>
                <p class="ks-clear">
                    <span class="left">证件号码</span>
                    <span class="right"><input type="number" /></span></p></div>`;
            }
            info_list.innerHTML=str;
        }
    });
});

element('.check-in-time').onclick = function(){
    let ele = this.querySelector('.icon');
    selector.show({
        list:['16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00'],
        callback:function(data){
            ele.innerHTML = data;
        }
    })
}

element('.rooms').onclick = function(){
    let ele = this.querySelector('.icon');
    selector.show({
        list:['工商银行','中国银行','邮政银行','广发银行','农业银行','信合银行'],
        callback:function(data){
            ele.innerHTML = data;
        }
    })
}
element('.roomss').onclick = function(){
    let ele = this.querySelector('.icon');
    selector.show({
        list:['身份证','驾驶证','护照证'],
        callback:function(data){
            ele.innerHTML = data;
        }
    })
}

