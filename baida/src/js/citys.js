 class Citys{
    constructor(data){
        this.datas=data || []
        this.render()
    }
    render(){
        let listA=document.querySelector(".c-listA")
        let conts=document.querySelector(".conts")


        let data=this.datas;
        let str=""

     data.forEach(function(value,index){
         str+=`<span>${value.alpha}</span>`
     })
        listA.innerHTML=str;

        let str1=""
        data.forEach(function(value,index){
            str1+=`<div>
                    <h2 alpha="${value.alpha}">${value.alpha}</h2>
                    <ul>
                      ${
                    value.data.map(function(v,i){
                        return `<li>${v[0]}</li>`
                    }).join("")
                
                }
                    </ul>
                  </div>`
        })
        conts.innerHTML=str1;
    }
}

 export { Citys }
