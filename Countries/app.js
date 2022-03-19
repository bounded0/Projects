const countryContainer = document.querySelector(".country-container");
console.log(countryContainer)
const initCountry = async () => {
  for (let i = 0; i < 200; i++) {
    await getCountry(i);
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
  console.log(name + " " + languages);

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

