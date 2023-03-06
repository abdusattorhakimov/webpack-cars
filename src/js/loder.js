const loder=document.querySelector("#loder")
console.log(loder);

const toggleLoder= function (info){
    if(info){
        loder.classList.remove("hidden")
    }else{
        loder.classList.add("hidden")
    }
}
export default toggleLoder 
