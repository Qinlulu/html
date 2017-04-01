class Banner{
    constructor(data){

        this.datas=data || []

        this.render()
        this.dom()
    }
    render(){

        let data=this.datas;
        let str=""
        let banner=document.querySelectorAll(".swiper-wrapper")[0]
        let banners=document.querySelector(".twoban")
        let zhe=document.querySelector(".lunbo .swiper-wrapper")

        data.forEach(function(value,index){
            str+=`<li class="swiper-slide">
                    <img src="${value.url}">
                    <p>${value.title}<p/>
                </li>`
        })

        banner.innerHTML=str;
        banners.innerHTML=str;
        zhe.innerHTML=str;

    }
    dom(){

        let city=document.querySelector(".city")
        let list=document.querySelectorAll(".list li")
        let hs=document.querySelectorAll(".hs")
        let time=document.querySelector(".time")
        let cont=document.querySelector(".contts")
 		let title=cont.querySelector(".title")
        let cSpan=title.querySelector("span")
        let ci=title.querySelector("i")
        let tims = document.querySelectorAll(".list li strong")
        
        let matter=document.querySelector(".matter")
        let shou=document.querySelector(".shou")




        let maList=matter.querySelectorAll(".ma-olist li")

        let iPhone=document.querySelector(".iPhone")
        let iPhones=document.querySelectorAll(".iPhone li")
        let maLists=document.querySelectorAll(".ma-lists strong")
		let yuding=document.querySelector(".yuding")
		


		let remove=yuding.querySelector(".remove")
		let mark=yuding.querySelector(".mark")
        let cSpans=matter.querySelector(".title span")
        let cis=matter.querySelector(" .title i")
        let ems=document.querySelectorAll(" .title em")


        for(let i=0;i<ems.length;i++){
            ems[i].onclick=function(){
                time.className="shows"
            }
        }
		
        for(let i=0;i<maLists.length;i++){
            maLists[i].onclick=function(){
                if(!this.classList.contains("s")){}


                yuding.style.display="block"
                matter.classList.add("ov")
            }
        }
        
        remove.onclick=function(){
            yuding.style.display="none"
            matter.classList.remove("ov")
        }

        maList[2].onclick=function(){
            iPhone.style.display="block"
            matter.classList.add("ov")
        }
        iPhones[4].onclick=function(){
            iPhone.style.display="none"
            matter.classList.remove("ov")
        }
        


        let i=document.querySelector(".c-list span i")
        let s=document.querySelector(".c-list span")

        setTimeout(function(){
            let s1=document.querySelectorAll(".c-listC span")
            let s2=document.querySelectorAll(".conts li")
            let strong=document.querySelectorAll(".list  strong")
            let cListS=document.querySelectorAll(".c-list  li strong")


            function click(ele){
                for(let i=0;i<ele.length;i++){
                    ele[i].onclick=function(){
                        for(let k=0;k<ele.length;k++){
                            ele[k].className='bgs'
                        }
                        this.className='bg'
                        strong[0].innerHTML=this.innerHTML;
                        cListS[0].innerHTML=this.innerHTML
                        hs[0].onclick()
                        huojian.style.display="none"

                       //console.log(this.innerHTML)
                       //console.log(strong[i])
                    }
                }
            }

            click(s1)
            click(s2)




        },0)

        hs[0].onclick=function(){
            city.className="city"
        }
        hs[1].onclick=function(){
            time.className="time"
        }
        hs[2].onclick=function(){
            cont.className="contts"
        }
        hs[3].onclick=function(){
           matter.className="matter"
            shou.style.display="block";
            cont.style.display="block";
        }

        let dYuding=document.querySelector(".dYuding")
        let dDanbao=document.querySelector(".dDanbao")
        let yesla=document.querySelector(".yesla")

        let dYudingSpan=document.querySelectorAll(".dYuding .button span")
        let dDanbaoSpan=document.querySelectorAll(".dDanbao .button span")
        let yesList=document.querySelectorAll(".yesla .yesList li")

        mark.onclick=function(){
            yuding.style.display="none"
            dYuding.classList.add("dYudings")
            matter.classList.remove("ov")
        }
        hs[4].onclick=function(){
            dYuding.classList.remove("dYudings")
        }


        dYudingSpan[0].onclick=function(){
            dDanbao.classList.add("dDanbaos")
        }

        dYudingSpan[1].onclick=function(){
           alert("真的考虑好了吗")
            yesla.style.display="block"
        }

        hs[5].onclick=function(){
            dDanbao.classList.remove("dDanbaos")
        }

        dDanbaoSpan[0].onclick=function(){
            alert("点击确认")
        }

        dDanbaoSpan[1].onclick=function(){
            alert("确认担保")
            dDanbao.classList.remove("dDanbaos")
        }

        yesList[1].onclick=function(){
            dDanbao.classList.remove("dDanbaos")
            yesla.style.display="none"
            dYuding.classList.remove("dYudings")


            matter.className="matter"
            cont.style.display="block";
            shou.style.display="block";
        }


			cSpan.innerHTML=tims[1].innerHTML
            ci.innerHTML=tims[2].innerHTML.substring(3,8)

            cSpans.innerHTML=cSpan.innerHTML
            cis.innerHTML=ci.innerHTML


            let dYi=dYuding.querySelector(".title span")
            let dYe=dYuding.querySelector(".title i")
            dYi.innerHTML=cSpan.innerHTML
            dYe.innerHTML=ci.innerHTML

        
        i.onclick=function(){
            if(s.className=="i"){
                i.innerHTML="&#xe704;"
                s.className=" "
            }else{
                i.innerHTML="&#xe6e2;"
                s.className="i"
            }

        }


        list[1].onclick=function(){
            time.className="shows"
        }
        list[2].onclick=function(){
            time.className="shows"
        }
        list[0].onclick=function(){
            city.className="show"
            let heightTop=document.querySelectorAll(".conts h2")
            let height={}
             Array.from(heightTop).forEach((value,index)=>{
                height[value.getAttribute("alpha")]=value.offsetTop
             })
            let s=document.querySelectorAll(".c-listA span")
            Array.from(s).forEach((value,index)=>{
                let citys=document.querySelector(".show")
                value.onclick=function(){
                    citys.scrollTop=height[value.innerHTML]
                }
            })

        }
            let huojian=document.querySelector(".huojian")
            let citys=document.querySelector(".city")
            citys.addEventListener("scroll",function(){

            if(citys.scrollTop>430){
                huojian.style.display="block"
            }else{
                huojian.style.display="none"
            }
        },false)

        huojian.onclick=function(){
           citys.scrollTop=0
        }



    }
}

export { Banner }