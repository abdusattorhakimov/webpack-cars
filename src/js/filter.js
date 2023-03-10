import request from "./request";
import { wordFanction } from "./updateUI";
const formm = document.querySelector('form');
const input = document.querySelector("#input");
const button = document.querySelector("#buttons");


formm.addEventListener(
  "submit",
  (e) => {
    e.preventDefault();
  }

  // console.log("ewjhgrueqwrwq");
  // const word = input.value;
  // console.log(word);
  // API = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  // request(API)
  //   .then((data) => {
  //     console.log(data);
  //     wordFanction(data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
);
