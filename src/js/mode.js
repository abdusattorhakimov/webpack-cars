const buttom = document.querySelector("#button");
const body = document.body;
const mode = localStorage.getItem("mode") ? localStorage.getItem("mode") : null;
const moon = document.querySelector("#moon");
if (mode) {
  body.classList.add("dark");
}
buttom.addEventListener("click", () => {
  body.classList.toggle("dark");
  moon.classList.toggle("moon");

  localStorage.getItem("mode")
    ? localStorage.setItem("mode", "")
    : localStorage.setItem("mode", "dark");
});
