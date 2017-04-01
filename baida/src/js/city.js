 class City{
    constructor(data){
        this.datas=data || []
        this.render()
    }
    render(){
        let data=this.datas;
        let str=""
        let listC=document.querySelector(".c-listC")
        for(let i in data){
            str+=`<span>${data[i]}</span>`
        }
        listC.innerHTML=str;
    }
}

 export { City }