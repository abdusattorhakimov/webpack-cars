// const loder=document.querySelector("#loder")
// console.log(loder);

// const toggleLoder= function (info){
//     if(info){
//         loder.classList.remove("hidden")
//     }else{
//         loder.classList.add("hidden")
//     }
// }
// export default toggleLoder
const selects = document.querySelector("#countries");
const option = document.querySelectorAll(".option");
const body = document.body;
console.log(selects.children);

selects.addEventListener("change", (t) => {
  console.log(t.target.value);
  if (t.target.value == "sans") {

    body.classList.add("font-[sans-serif]");
    body.classList.remove("font-serif");
    body.classList.remove("font-mono");

  } else if (t.target.value == "serif") {

    body.classList.add("font-serif");
    body.classList.remove("font-mono");
    body.classList.remove("font-[sans-serif]");

  } else if (t.target.value == "mono") {

    body.classList.add("font-mono");
    body.classList.remove("font-serif");
    body.classList.remove("font-[sans-serif]");

  }
});
