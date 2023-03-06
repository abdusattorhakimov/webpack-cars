import "../css/style.css";
import "./mode";
import request from "./request";
import { aboutFan } from "./updateUI";

const querysting = window.location.search;
const urlPares = new URLSearchParams(querysting);
const country = urlPares.get("country");
const countryApi = `https://restcountries.com/v3.1/name/${country}`;
console.log(countryApi);
request(countryApi).then((data)=>{
    console.log(data);
    aboutFan(data[0])                                                                   
}).catch((err)=>{
 alert(err.message)
 })