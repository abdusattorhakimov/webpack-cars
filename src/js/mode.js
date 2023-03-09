const buttom = document.querySelector("#button");
const body = document.body;
const mode = localStorage.getItem("mode") ? localStorage.getItem("mode") : null;
if (mode) {
  body.classList.add("dark");
}
buttom.addEventListener("click", () => {
  body.classList.toggle("dark");
  
  localStorage.getItem("mode")
    ? localStorage.setItem("mode", "")
    : localStorage.setItem("mode", "dark");
});
