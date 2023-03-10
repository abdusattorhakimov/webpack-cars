import "../css/style.css";

console.log("main js");

import request from "./request";
import "./updateUI";
import "./filter";
import "./loder";
import "./mode";
import { wordFanction } from "./updateUI";
const API = "https://api.dictionaryapi.dev/api/v2/entries/en/keyboard";
request(API)
  .then((data) => {
    console.log(data);
    wordFanction(data);
  })
  .catch((err) => {
    console.log(err);
  });

