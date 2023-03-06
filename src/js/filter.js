import request from "./request";
import { creatCountry } from "./updateUI";

const input = document.querySelector("#search-dropdown");
// console.log(input);
input.addEventListener("input", () => {
  const inputValue = input.value.toLowerCase();
  const card = document.querySelectorAll("#card"); // []
  const cardTitle = document.querySelectorAll("#cardTitle");
  cardTitle.forEach((title, i) => {
    if (title.textContent.toLowerCase().includes(inputValue)) {
      card[i].style.display = "block";
    } else {
      card[i].style.display = "none";
    }
  });
});

const selects = document.querySelectorAll("#countries");
// console.log(selects);

selects.forEach((e) => {
  // console.log(t);
  e.addEventListener("change", (t) => {
    let filterApi;
    //  console.log(t.target.value);
    if (t.target.value == "all") {
      filterApi = "https://restcountries.com/v3.1/all";
      console.log(filterApi);
    } else {
      filterApi = `https://restcountries.com/v3.1/region/${t.target.value}`;
      console.log(filterApi);
      console.log(t.target.value);
    }
    request(filterApi)
      .then((data) => {
        creatCountry(data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
});
