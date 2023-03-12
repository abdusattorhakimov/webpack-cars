import request from "./request";
import wordFanction from "./updateUI";

const formm = document.querySelector("form");
const input = document.querySelector("#input");

let API = "https://api.dictionaryapi.dev/api/v2/entries/en/";

formm.addEventListener("submit", (e) => {
  e.preventDefault();
  const word = input.value.trim();
  request(API + word)
    .then((data) => {
      // console.log(data);
      wordFanction(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
// console.log("ewjhgrueqwrwq");
// console.log(word);
