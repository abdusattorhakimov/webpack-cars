const card = document.querySelector(".card");

export const creatCountry = (countryes) => {
  console.log(countryes);
  card.innerHTML = "";
  countryes.forEach((country) => {
    console.log(country);

    card.innerHTML += `<div id="card" class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
   <!-- Article -->
   <article class="overflow-hidden rounded-lg shadow-lg">
       <a href="./about.html?country=${country.name.common}">
       <img
         alt="Placeholder"
         class="block h-52 w-full"
         src="${country.flags.svg}"
       />
     </a>

     <header
       class=" items-center justify-between leading-tight p-2 md:p-4"
     >
       <h1 id="cardTitle" class=" dark:text-gray-200 text-lg no-underline hover:underline text-black">
     <strong> ${country.name.common}</strong></p>
       </h1>
       <p class="text-grey-darker dark:text-gray-200 text-sm block"><strong>Populition: </strong> ${country.population}</p>
       <p class="text-grey-darker dark:text-gray-200 text-sm block"><strong>Region:</strong>  ${country.region} </p>
       <p class="text-grey-darker dark:text-gray-200 text-sm"><strong>Capital:</strong>  ${country.capital}</p>
     </header>
   </article>
   <!-- END Article -->
 </div>`;
  });
};

// About pages
const cardpage = document.querySelector("#about-card");
console.log();
export const aboutFan = function (country) {
  console.log(country);
  console.log();
  cardpage.innerHTML += `<section class="flex  justify-between mt-14 flex-wrap gap-14">
  <a href="./about.html ">
    <img class="w-[600px] h-[400px]"
      alt="Placeholder"
      class="block h-52 w-full"
      src="${country.flags.png}"
      width="600"
      height="700"
    />
  </a>
 <div class="title-div flex items-center justify-between gap-12 flex-wrap">
  <header
 class=" items-center justify-between leading-tight p-2 md:p-4"
>
 <h1 id="cardTitle" class=" dark:text-gray-200 text-lg no-underline hover:underline text-black">
<strong> ${country.name.common}</strong></p>
 </h1>
 <p class="text-grey-darker  dark:text-gray-200 text-sm block"><strong>Populition: </strong> ${country.population}</p>
 <p class="text-grey-darker dark:text-gray-200 text-sm block"><strong>Region:</strong>  ${country.region} </p>
 <p class="text-grey-darker dark:text-gray-200 text-sm"><strong>Capital:</strong>  ${country.capital}</p>
</header>
<div class="level">
<p class="text-grey-darker dark:text-gray-200 text-sm block"><strong>Currencies: </strong> ${Object.values(country.currencies)[0].name}</p>
 <p class="text-grey-darker dark:text-gray-200 text-sm block"><strong>Languages:</strong>  ${Object.values(country.languages)} </p>
 <p class="text-grey-darker dark:text-gray-200 text-sm"><strong>Subregion
 :</strong>  ${country.subregion}</p>
</div>
 </div>
  </section>`;
};
