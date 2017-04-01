class Times {
    constructor() {
        this.dom()
    }

    dom() {

        let y,m;
        let data = new Date();
        let dat = data.getDate();//日
         y = data.getFullYear();//年
         m = data.getMonth();


        let head = document.querySelectorAll(".times .header a")
        let chekIn = document.querySelectorAll(".footer strong")
        let btn = document.querySelectorAll(".footer strong button")
        let ipt = document.querySelector(".footer strong input")
        let tims = document.querySelectorAll(".list li strong")
        let time = document.querySelector(".time")
        let left = document.querySelector(".left")
        let right = document.querySelector(".right")

        let ts = ""
        let tt = ""
        tt="1晚(" + (m + 1) + "月" + (dat + 1) + "日离店)"


        let yes = document.querySelector(".yes")

        head[1].innerHTML = y + "年" + (m + 1) + "月"



        let ss = ""
        ts=(m + 1) + "月" + dat + "日"

        chekIn[0].innerHTML = ts

        setTimeout(function () {

            let over = document.querySelector(".time .overs")
            let ipt = document.querySelector(".footer strong input")
            ipt.value=1

            tt="1晚(" + (m + 1) + "月" + ((over.querySelector("span").innerHTML*1) + (ipt.value*1))+ "日离店)";



            let tds = document.querySelectorAll("td")
            tds.forEach((val, ind) => {
                val.onclick = function () {
                    if(this.classList.contains("over") || this.innerText==""){
                        return ;
                    }
                    for(let i=0;i<tds.length;i++){
                        tds[i].classList.remove("overs")
                    }
                    this.classList.add("overs")

                    ts = (m + 1) + "月" + this.querySelector("span").innerHTML + "日"
                    chekIn[0].innerHTML = ts

                    tt = ipt.value + "晚(" + (m + 1) + "月" + ((this.querySelector("span").innerHTML * 1) +  (ipt.value*1)) + "日离店)"

                }

            })

            btn[0].onclick = function () {
                let over = document.querySelector(".overs")
                if (ipt.value > 0) {
                    ipt.value--
                }

                tt = ipt.value + "晚(" + (m + 1) + "月" + ((over.querySelector("span").innerHTML*1) +  (ipt.value*1)) + "日离店)"

            }
            btn[1].onclick = function () {
                let over = document.querySelector(".overs")
                ipt.value++

                tt = ipt.value + "晚(" + (m + 1) + "月" + ((over.querySelector("span").innerHTML*1) +  (ipt.value*1)) + "日离店)"

            }

            yes.onclick = function () {
                let over = document.querySelector(".overs")
                let ipt = document.querySelector(".footer strong input")
                time.className = "time"
                let tims = document.querySelectorAll(".list li strong")
                let ms=(over.querySelector("span").innerHTML*1)+ (ipt.value*1)
                let dat=new Date(y,m,ms)


    tt = ipt.value + "晚(" + ( dat.getMonth()+ 1) + "月" +(dat.getDate()) + "日离店)"

                tims[2].innerHTML = tt;
                tims[1].innerHTML = ts;

                let emss=document.querySelectorAll(".title");
                for(let i=0;i<emss.length;i++){
                    setTimeout(function(){
                        emss[i].querySelector("span").innerHTML=ts;
                        emss[i].querySelector("i").innerHTML = tt.substring(3,8);
                    },0)
                }
            }
        }, 0)


        tims[1].innerHTML = ts
        tims[2].innerHTML = tt;
        
        function getDays(y, m) {
            let arr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            if ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0) {
                arr[1] = 29;
            }
            return arr[m];
        }

        var  days;

        days = getDays(y, (m + 1));

        left.onclick=function(){
            m--
            let data = new Date(y,m);
            let dat = data.getDate();//日
            y = data.getFullYear();//年
            m = data.getMonth();

            days = getDays(y,m );
            day(y,m,days,1)
            head[1].innerHTML = y + "年" + (m + 1) + "月"
            let tds = document.querySelectorAll("td")
            tds.forEach((val, ind) => {
                val.onclick = function () {
                    if(this.classList.contains("over") || this.innerText==""){
                        return ;
                    }
                    for(let i=0;i<tds.length;i++){
                        tds[i].classList.remove("overs")
                    }
                    this.classList.add("overs")

                    ts = (m + 1) + "月" + this.querySelector("span").innerHTML + "日"
                    chekIn[0].innerHTML = ts

                    tt = ipt.value + "晚(" + (m + 1) + "月" + ((this.querySelector("span").innerHTML * 1) +  (ipt.value*1)) + "日离店)"

                }

            })
        }

        right.onclick=function(){

            m++
            let data = new Date(y,m);
            let dat = data.getDate();//日
            y = data.getFullYear();//年
            m = data.getMonth();
            days = getDays(y,m);


            day(y,m,days,1)
            head[1].innerHTML = y + "年" + (m + 1) + "月"
            let tds = document.querySelectorAll("td")
            tds.forEach((val, ind) => {
                val.onclick = function () {
                    if(this.classList.contains("over") || this.innerText==""){
                        return ;
                    }
                    for(let i=0;i<tds.length;i++){
                        tds[i].classList.remove("overs")
                    }
                    this.classList.add("overs")

                    ts = (m + 1) + "月" + this.querySelector("span").innerHTML + "日"
                    chekIn[0].innerHTML = ts

                    tt = ipt.value + "晚(" + (m + 1) + "月" + ((this.querySelector("span").innerHTML * 1) +  (ipt.value*1)) + "日离店)"

                }

            })
        }

        day(y,m,days,dat)



function day(y,m,days,dat){
    let str = "";
    let ds;
    ds = new Date(y, m, 1).getDay()
    str += "<table><tbody >"
    // 求出创建的行数
    let trs;
    trs = Math.ceil((days + ds) / 7);
    for (let q = 0; q < trs; q++) {
        str += "<tr>";
        for (let s = 1; s <= 7; s++) {
            let num = q * 7 + s - ds;
            if (num < 1 || num > days) {
                str += "<td><span></span></td>"
            } else if (num == dat) {
                str += "<td class='overs'><span >" + num + "</span></td>"
            } else {
                if (num < dat) {
                    str += "<td class='over'><span>" + num + "</span></td>"
                } else {
                    str += "<td><span>" + num + "</span></td>"
                }
            }

        }
        str += "</tr>";
    }

    str += "</tbody></table>"

    let timm = document.querySelector(".timm")

    timm.innerHTML = str
}

    }
}

export {Times}