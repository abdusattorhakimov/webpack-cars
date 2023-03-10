const container = document.querySelector("#container");
console.log(container);

export const wordFanction = (words) => {
  console.log(words);
  words.forEach((e) => {
    console.log(e.meanings[0].partOfSpeech);
    container.innerHTML += `
    <section>
          <ul class="mb-[40px] max-sm:mb-[29px] flex items-center justify-between">
            <li>
              <h1
                class="text-[64px] max-sm:text-[32px] max-sm:leading-[39px] font-bold leading-[77px]  text-[#2D2D2D] dark:text-[#ffffff]"
              >
                ${e.word}
              </h1>
              <p
                class="text-[24px] max-sm:text-[18px] max-sm:leading-[24px]  font-thin leading-[29px] text-[#A445ED]"
              >
                ${e.phonetic}
              </p>
            </li>
            <li
              class="mt-[40px] rounded-[50%] max-sm:w-[48px] max-sm:h-[48px] w-[75px] h-[75px] dark:bg-[rgba(164,69,237,0.25)] bg-[rgba(164,69,237,0.6)] flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20" 
                fill="none"
              >
                <path
                  fill="#A445ED"
                  fill-rule="evenodd"
                  d="M0 0v21l21-10.5L0 0Z"
                  clip-rule="evenodd"
                />
              </svg>
            </li>
          </ul>
          <ul>
            <li class="flex gap-[20px] items-center">
              <h3
                class=" max-sm:text-[18px] max-sm:leading-[22px] text-[24px] font-sans font-bold leading-[29px] dark:text-[#ffffff] text-[#2D2D2D]"
              >
                <i> ${e.meanings[0].partOfSpeech}</i>
              </h3>
              <div class="w-[656px] h-[1px] dark:bg-[#3A3A3A] bg-[#E9E9E9]"></div>
            </li>
          </ul>
          <p
            class=" max-sm:mb-[17px] max-sm:text-[16px] max-sm:leading-[19px] mb-[25px] text-[20px] font-sans font-thin leading-[24px] text-[#757575]"
          >
            Meaning
          </p>
          <ul class="max-sm:ml-[0px] max-sm:mb-[20px] ml-[23px] mb-[64px]">
            <li class="mb-[13px] flex gap-[20px] rounded-[100%]">
              <span
                class="mt-[13px] w-[7px] h-[7px] bg-[#8F19E8] rounded-[100%]"
              ></span>

              <p
                class=" max-sm:text-[15px]  text-[18px] font-thin leading-[24px] dark:text-[#ffffff] text-[#2D2D2D]"
              >
                ${e.meanings[0].definitions[0].definition} 
              </p>
            </li>
            <li class="mb-[13px] flex gap-[20px]">
              <div class="mt-[11px]">
                <span
                  class="w-[7px] h-[7px] block bg-[#8F19E8] rounded-[100%]"
                ></span>
              </div>
              <p
                class=" max-sm:text-[15px] text-[18px]  font-thin leading-{24px} dark:text-[#ffffff] text-[#2D2D2D]"
              >
              ${e.meanings[0].definitions[1].definition} 
              </p>
            </li>
            <li class="mb-[13px] flex gap-[20px]">
              <div class="mt-[11px]">
                <span
                  class="w-[7px] h-[7px] block bg-[#8F19E8] rounded-[100%]"
                ></span>
              </div>
              <p
                class="max-sm:text-[15px] text-[18px]  font-thin leading-[24px] dark:text-[#ffffff] text-[#2D2D2D]"
              >
              ${e.meanings[0].definitions[2].definition} 
              </p>
            </li>
          </ul>
          <ul class="flex gap-[22px] max-sm:mb-[33px] mb-[40px]">
            <li>
              <p
                class="max-sm:text-[16px] max-sm:leading-[19px] text-[20px]  font-bold leading-[24px] text-[#757575]"
              >
                Synonyms
              </p>
            </li>
            <li>
              <p
                class="max-sm:text-[16px] max-sm:leading-[19px] text-[20px]  font-bold leading-[4px] text-[#A445ED]"
              >
              ${e.meanings[0].synonyms} 
              </p>
            </li>
          </ul>
        </section>
        <section>
          <ul >
            <li class=" flex gap-[20px] items-center">
              <h3
                class="max-sm:text-[18px] max-sm:leading-[22px] dark:text-[#ffffff] text-[24px] font-sans font-bold leading-{29px} text-[#2D2D2D]"
              >
                <i>${e.meanings[1].partOfSpeech}  </i>
              </h3>
              <div class="w-[656px] dark:bg-[#3A3A3A] h-[1px] bg-[#E9E9E9]"></div>
            </li>
          </ul>
          <p
            class="max-sm:mt-[31px]  mt-[40px] max-sm:mb-[17px] mb-[25px] text-[20px]  font-thin leading-{24px} text-[#757575]"
          >
            Meaning
          </p>
          <ul class="max-sm:mb-[32px] ml-[23px] mb-[40px]">
            <li
              class="mb-[20px] flex gap-[20px] text-[18px]  font-thin leading-{24px} text-[#2D2D2D]"
            >
              <span
                class="mt-[11px] w-[7px] h-[7px] block bg-[#8F19E8] rounded-[100%]"
              ></span>
              <p class="max-sm:text-[15px]  dark:text-[#ffffff]">${e.meanings[1].definitions[0].definition} <br>

              <span class= "max-sm:text-[15px] dark:text-[#353333]">${e.meanings[1].definitions[0].example}</span>
              </p>
              
            </li>
          </ul>
          <div class= "max-sm:mb-[24px]  max-w-[656px] h-[1px] dark:bg-[#3A3A3A] bg-[#E9E9E9] mb-[20px]"></div>
          <ul class="flex pb-[120px] max-sm:pb-[85px] gap-[20px] max-sm:flex-none max-sm:flex-col">
            <li class="underline">
              <a
                class="max-sm:text-[14px] max-sm:leading-[17px] pb-[4px] text-[14px] font-sans font-thin leading-{17px} text-[#757575]"
                href=""
                >Source</a
              >
            </li>
            <li class="underline flex gap-[20px] items-center">
              <a
                class="max-sm:text-[14px] max-sm:leading-[17px] dark:text-[#ffffff] px-[4px] text-[14px] font-sans font-thin leading-{17px} text-[#2D2D2D]"
                href="${e.sourceUrls[0]}"
                >${e.sourceUrls[0]}</a
              >
              <a href=""
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="none"
                >
                  <path
                    fill="#757575"
                    d="M6.09 4.295a.75.75 0 0 0 0-1.5v1.5Zm-4.664-.324.53.53-.53-.53Zm0 8.603.53-.53-.53.53Zm9.778-4.665a.75.75 0 1 0-1.5 0h1.5Zm-6.37.197a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm8.333-6.212a.75.75 0 1 0-1.061-1.06l1.06 1.06Zm-.53.22a.75.75 0 0 0 0-1.5v1.5ZM9 .614a.75.75 0 0 0 0 1.5v-1.5Zm4.386.75a.75.75 0 0 0-1.5 0h1.5ZM11.886 5a.75.75 0 1 0 1.5 0h-1.5ZM6.091 2.795H2.455v1.5H6.09v-1.5Zm-3.636 0c-.585 0-1.146.233-1.56.646l1.061 1.06a.704.704 0 0 1 .499-.206v-1.5Zm-1.56.646A2.204 2.204 0 0 0 .25 5h1.5c0-.187.074-.366.206-.498l-1.06-1.06ZM.25 5v6.546h1.5V5H.25Zm0 6.546c0 .584.232 1.145.646 1.558l1.06-1.06a.705.705 0 0 1-.206-.498H.25Zm.646 1.558c.413.414.974.646 1.559.646v-1.5a.705.705 0 0 1-.499-.206l-1.06 1.06Zm1.559.646H9v-1.5H2.455v1.5Zm6.545 0c.585 0 1.145-.232 1.559-.646l-1.06-1.06A.704.704 0 0 1 9 12.25v1.5Zm1.559-.646c.413-.413.646-.974.646-1.558h-1.5a.704.704 0 0 1-.207.498l1.06 1.06Zm.646-1.558V7.909h-1.5v3.637h1.5Zm-5.311-2.38 7.273-7.272-1.061-1.06-7.273 7.272 1.061 1.06ZM12.636.615H9v1.5h3.636v-1.5Zm-.75.75V5h1.5V1.364h-1.5Z"
                  /></svg
              ></a>
            </li>
          </ul>
        </section>
    `;
  });
};
