import request from "./request";

import { wordFanction } from "./updateUI";
const inptt = document.querySelector("#input-search");
console.log(inptt);
inptt.addEventListener("input", () => {
  const inputValue = inptt.value.toLowerCase();
  request(`https://api.dictionaryapi.dev/api/v2/entries/en/${inptt.value}`)
    .then((data) => {
      console.log(data);
      wordFanction(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
