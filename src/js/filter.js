import request from "./request";
import wordFanction from "./updateUI";

const formm = document.querySelector("form");
let input = document.querySelector("#input");
let conta = document.querySelector(".maincontainer");

let API = "https://api.dictionaryapi.dev/api/v2/entries/en/";
formm.addEventListener("submit", (e) => {
  e.preventDefault();
  const word = input.value.trim();
  request(API + word)
    .then((data) => {
      wordFanction(data);
    })
    .catch((err) => {
      console.log(err);
      conta.innerHTML = ` <div id="errorDiv" class="text-center pt-[132px] max-sm:pt-[60px]">
      <span  class=" text-center w-[64px] h-[64px] max-sm:w-[44px] max-sm:h-[44px] mb-[44px] max-sm:mb-[24px]">🙂</span>
      <h4
        class="mb-[24px] max-sm:mb-[14px] max-sm:text-[18px] max-sm:leading-[22px] text-[20px] font-sans font-bold leading-[24px] dark:text-[#ffffff] text-[#2D2D2D]"
      >
        No Definitions Found
      </h4>
      <p
        class="mb-[24px] max-sm:mb-[14px] max-sm:text-[14px] max-sm:leading-[20px] text-[18px] font-sans font-bold leading-[24px] dark:text-[#cfc5c5] text-[#757575]"
      >
        Salom.So'zni hato kiritgan bolishiz yoki siz kiritgan so'z bizzi
        sayt bomasligi mumkin.Hato kamchilikla uchun uzur sorayman.
      </p>
      <h2
        class=" mb-[24px] max-sm:mb-[14px] max-sm:text-[18px] max-sm:leading-[22px] text-[20px] font-sans font-bold leading-[24px] dark:text-[#ffffff] text-[#2D2D2D]"
      >
        Khakimov Abdusattor
      </h2>
      <p
        class="max-sm:text-[14px] max-sm:leading-[20px] text-[18px] font-sans font-bold leading-[24px] dark:text-[#cfc5c5] text-[#757575]"
      >
        Sorry pal, we couldn't find definitions for the word you were
        looking for. You can try the search again at later time or head
        to the web instead.
      </p>
    </div>
  </div>`;
    });
});
