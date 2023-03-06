import "../css/style.css";

// console.log("main js");
import request from "./request";
import { creatCountry } from "./updateUI";
import "./filter";
import "./loder";
import "./mode"
const API = "https://restcountries.com/v3.1/all";
request(API)
  .then((data) => {
    creatCountry(data);
  })
  .catch((err) => {
    console.log(err);
  });
