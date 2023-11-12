import { apiKey } from "./config.js";

// Seeing if I have connected my script.js correctly

console.log("hello")

// calling RAWG.io API to display list of genres in dropdown menu
async function fetchGenres() {
    const genresResponse = await fetch(`https://api.rawg.io/api/genres?key=${apiKey}`);
    let genresDropdown = document.getElementById('genres');
    let genresResponseObject = await genresResponse.json();
    let options = genresResponseObject.results;
    for(let option of options){
  let optionToAdd = document.createElement('option');
      optionToAdd.innerHTML = option.name;
      optionToAdd.value = option.id
      genresDropdown.appendChild(optionToAdd);
  }
  }
   fetchGenres();

// calling RAWG API to display list if storefronts in a dropdown menu
   async function fetchStores() {
    const storesResponse = await fetch(`https://api.rawg.io/api/stores?key=${apiKey}`);
    let storesDropdown = document.getElementById('stores');
    let storesResponseObject = await storesResponse.json();
    let options = storesResponseObject.results;
    for(let option of options){
  let optionToAdd = document.createElement('option');
      optionToAdd.innerHTML = option.name;
      optionToAdd.value = option.id
      storesDropdown.appendChild(optionToAdd);
  }
  }
   fetchStores();

// calling RAWG API to display list of platforms in a dropdown menu

    async function fetchPlatform() {
    const platformsResponse = await fetch(`https://api.rawg.io/api/platforms?key=${apiKey}`);
    let platformsDropdown = document.getElementById('platforms');
    let platformsResponseObject = await platformsResponse.json();
    let options = platformsResponseObject.results;
    for(let option of options){
  let optionToAdd = document.createElement('option');
      optionToAdd.innerHTML = option.name;
      optionToAdd.value = option.id
      platformsDropdown.appendChild(optionToAdd);
  }
  }
   fetchPlatform();
// building the api based on inputs from user
   function buildApiUrl(){
   let genres = document.getElementById('genres').value;
   let stores = document.getElementById('stores').value;
   let platforms = document.getElementById('platforms').value;

   let apiUrl = `https://api.rawg.io/api/${genres}/${stores}/${platforms}?key=${apiKey}`
   console.log(apiUrl)
   }

   document.getElementById('generateUrlButton').addEventListener('click', buildApiUrl)

