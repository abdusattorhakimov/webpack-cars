import "../css/style.css";

import request from "./request";
import "./updateUI";
import "./filter";
import "./loder";
import "./mode";
import { wordFanction } from "./updateUI";
let API = "https://api.dictionaryapi.dev/api/v2/entries/en/life";
request(API)
  .then((data) => {
    console.log(data);
    wordFanction(data);
  })
  .catch((err) => {
    console.log(err);
  });

const formm = document.querySelector("#input-search");
const input = document.querySelector("#input");
console.log(formm, input);
