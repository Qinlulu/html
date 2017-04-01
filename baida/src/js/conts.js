class Cons {
    constructor(data) {
        this.datas = data || []

        this.dom()
    }

    dom() {
        let datas = this.datas
        let str = ""

        datas.forEach((value, ind)=> {
            function num(a,b){
                return Math.floor(Math.random()*(b-a+1)+a)
            }

            let nums=num(2,5)
            str += `<dl district="${value.district}" price="${value.price}" xing="${nums}">
                <dt><img src="../imgs/f.jpg" alt=""></dt>
                <dd>
                    <h3>${value.name}</h3>
                    <p><mark>${nums}</mark><strong>星</strong></p>
                    <p><em>${value.district}</em><a>&#x3470;</a><a>&#xe70a;</a></p>
                    <p><span>${value.addr}</span><i>${0.8}km</i></p>
                        <section class="side">
                            <i>￥</i><span>${value.price}</span><strong>起</strong>
                        </section>
                </dd>
            </dl>`
        })

        let matterss=document.querySelector(".matter")
        let shou=document.querySelector(".shou")
        let sho = document.querySelector(".sho")
        let dls = sho.querySelector(".dls")
        let sex = dls.querySelector(".sex")
        let lists;

        setTimeout(function(){
           lists=dls.querySelectorAll("dl")
            for(let i=0;i<lists.length;i++){
                lists[i].onclick=function(){
                    //点击dl将数据传递过去
                    let h3=this.querySelector(" dd h3").innerHTML
                    let span=this.querySelectorAll(" dd p")[2].querySelector("span").innerHTML
                    let str= this.querySelectorAll(" dd p")[0].innerHTML+"级酒店"

                    matterss.querySelectorAll(".ma-olist li")[0].innerHTML=h3
                    matterss.querySelectorAll(".ma-olist li")[1].querySelector("strong").innerHTML=str
                    matterss.querySelectorAll(".ma-olist li")[3].querySelector("strong").innerHTML=span
                    sho.style.display="none";
                    shou.style.display="none";
                    matterss.className="matters"
                }
            }
        },0)

        let matter = document.querySelector(".matter .dlss .dls")
        let matters = document.querySelector(".matter .dlsss .dls")

        matter.innerHTML = str
        matters.innerHTML = str
        sex.innerHTML = str


        let i = document.querySelectorAll(".sho .orders i")
        let footer = document.querySelector(".footers")
        let orderss = document.querySelector(".orderss")
        let as = footer.querySelectorAll("a")
        let orders = document.querySelector(".orders")

        //点击footer下的列表进行选择  排序
        for (let i = 0; i < as.length; i++) {
            as[i].onclick = function () {
                if (!this.classList.contains("o")) {
                    for (let k = 0; k < as.length; k++) {
                        as[k].classList.remove("o")
                    }
                    let num = ((this.getAttribute("footer") * 1) * 25)
                    orderss.style.transform = "translate3d(-" + num + "%,0,0)"
                    orderss.style.transition = "transform 0.3s ease"
                    this.classList.add("o")
                    orders.style.display = "block"

                } else {
                    this.classList.remove("o")
                    orders.style.display = "none"
                }

            }
        }

        //创建一个对象 点击选项 追加属性值
        let obj = {
            district: [],
            price:0,
            xing:[]
        }


        //遍历所有的选项里的值  点击事件
        Array.from(i).forEach((v, i)=> {

            v.onclick = function () {
                //点击的时候  获取target的 自定义属性
                let district = this.getAttribute("district")
                let price=this.getAttribute("price")*1
                let xing=this.getAttribute("xing")



                //判断是不是价格  是价格就是单选
                let jiage=document.querySelector(".jiage")
                let is=jiage.querySelectorAll("i")
                if(this.parentNode.parentNode.parentNode.classList.contains("jiage")){
                    for(let i=0;i<is.length;i++){
                        is[i].innerHTML = "&#xe704;"
                        is[i].className=" "
                        obj.price=0
                    }

                }


                //点击的时候改变样式
                if (v.className == "i") {
                    v.innerHTML = "&#xe704;"
                    v.className = ""

                    //删除数组中的str
                    let num = obj.district.indexOf(district)
                    let xings = obj.xing.indexOf(xing)

                    if(district==null){ obj.xing.splice(xings, 1) }else{ obj.district.splice(num, 1) }

                } else {
                    v.innerHTML = "&#xe6e2;"
                    v.className = "i"

                    //判断然后进行对象复制
                    if(district==null){ district="" }else{ obj.district.push(district) }
                    if(xing==null){xing=""}else{obj.xing.push(xing)}
                    obj.price=price

                }
                sreen(obj)
            }
        })

        //编写函数 进行筛选
        function sreen(obj) {
            let dlsDl = dls.querySelectorAll("dl")
            for (let i = 0; i < dlsDl.length; i++) {

                dlsDl[i].style.display = "block"

                for (var ind in obj) {
                    if(ind=="price"){
                        if(obj.price>dlsDl[i].getAttribute("price")){
                            dlsDl[i].style.display = "none"
                        }
                       /* if(obj.district.indexOf(dlsDl[i].getAttribute("district"))<0){
                            dlsDl[i].style.display = "none"
                        }
                        if(obj.xing.indexOf(dlsDl[i].getAttribute("xing"))<0){
                            dlsDl[i].style.display = "none"
                        }*/


                    }else{
                        if(obj[ind].length==0){

                        }else{
                            if(obj[ind].indexOf(dlsDl[i].getAttribute(ind))<0){
                                dlsDl[i].style.display = "none"
                            }
                        }

                    }


                }
            }
        }
    }
}


export { Cons }

/*
 点击的时候 将属性传给对象中
 */