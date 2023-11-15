import { apiKey } from "./config.js";

// Seeing if I have connected my script.js correctly

console.log("hello")

// calling RAWG.io API to display list of genres in dropdown menu
async function fetchGenres() {
    const genresResponse = await fetch(`https://api.rawg.io/api/genres?key=${apiKey}`);
    let genresDropdown = document.getElementById('genres');
    let genresResponseObject = await genresResponse.json();
    let options = genresResponseObject.results;
    for (let option of options) {
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
    let excludedStores = [4,7,8,9,]
    for (let option of options) {
        if (!excludedStores.includes(option.id) ) {
            let optionToAdd = document.createElement('option');
            optionToAdd.innerHTML = option.name;
            optionToAdd.value = option.id
            storesDropdown.appendChild(optionToAdd);
        }
    }
}
fetchStores();

// calling RAWG API to display list of platforms in a dropdown menu

async function fetchPlatform() {
    const platformsResponse = await fetch(`https://api.rawg.io/api/platforms?key=${apiKey}`);
    let platformsDropdown = document.getElementById('platforms');
    let platformsResponseObject = await platformsResponse.json();
    let options = platformsResponseObject.results;
    let excludedPlatforms = [9,10,11,12,13,14,17,19,22,23,25,26,27,28,31,34,41,43,46,49,50,55,80,74,77,79,106,107,111,112,117,119,166,167]
    for (let option of options){
    if (!excludedPlatforms.includes(option.id) ) {
        let optionToAdd = document.createElement('option');
        optionToAdd.innerHTML = option.name;
        optionToAdd.value = option.id
        platformsDropdown.appendChild(optionToAdd);
    }
}
}
fetchPlatform();
// building the api based on inputs from user
async function fetchGames() {
    let genres = document.getElementById('genres').value;
    let stores = document.getElementById('stores').value;
    let platforms = document.getElementById('platforms').value;
    let metacritic = document.getElementById('metacritic').value;
    let apiUrl = `https://api.rawg.io/api/games?key=${apiKey}&page_size=50`
    if (genres){
        apiUrl = apiUrl+`&genres=${genres}`   
    }
    if (platforms){
        apiUrl = apiUrl+`&platforms=${platforms}`
        
    }
    if (stores){
        apiUrl = apiUrl+`&stores=${stores}`
        
    }
    if (metacritic){
        apiUrl = apiUrl+`&metacritic=${metacritic},100`
        
    }
     console.log(apiUrl)

    const searchGamesResponse = await fetch(apiUrl);

    let searchGamesObject = await searchGamesResponse.json();
    let gamesList = searchGamesObject.results;
    let randomNumber = Math.floor(Math.random() * gamesList.length);
    let randomGame = gamesList[randomNumber]
    console.log(randomGame)
   
    document.getElementById('randomGameContainer').innerHTML ='';

    let gameNameElement = document.createElement('p');
    gameNameElement.innerHTML = randomGame.name;

    let gamePictureElement = document.createElement('img');
    gamePictureElement.src = randomGame.background_image;
    gamePictureElement.alt = randomGame.name;

    document.getElementById('randomGameContainer').appendChild(gameNameElement);
    document.getElementById('randomGameContainer').appendChild(gamePictureElement);

}
 
document.getElementById('generateUrlButton').addEventListener('click', fetchGames)

