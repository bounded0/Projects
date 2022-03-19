const countryContainer = document.querySelector(".country-container");
const searchInput = document.querySelector("#country-input")
const searchBtn = document.querySelector(".btn-search")

//console.log(countryContainer)



const initCountry = async () => {
  for (let i = 0; i < 1000; i++) {
    await getCountry(i);
    console.log(i)
  }
};
const getCountry = async (name) => {
  let url = `https://restcountries.com/v2/all`;
  let res = await fetch(url);
  let data = await res.json();
  createCountry(data[name]);
  //console.log(data[name].name +" "+ data[name].languages[0].name );
};








const createCountry = (country) => {

  const name = country.name;
  const languages = country.languages[0].name;
  const flags = country.flags.png;


  const countryEl = document.createElement("div");
  countryEl.classList.add("country-box");

  countryEl.innerHTML = `
    <img src="${flags}"></img>
    <h4 class="country-name">${name}</h4>
    <p class="country-language">${languages}</p>
    
     `;
  countryContainer.appendChild(countryEl);


};
initCountry();

searchInput.addEventListener("input",function(e){
  const countryNames = document.querySelectorAll(".country-name")
  console.log(countryNames)
  const search = searchInput.value.toLowerCase();
  const countries = document.querySelectorAll("country-box");

  countryNames.forEach((countryName) => {
    countryName.parentElement.style.display = 'block';
    if(!countryName.innerHTML.toLowerCase().includes(search)){
    countryName.parentElement.style.display = 'none';

      
    }

  })


  
})

