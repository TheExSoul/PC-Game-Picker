import { apiKey } from "./config.js";

// Seeing if I have connected my script.js correctly

console.log("hello")

// calling RAWG.io API to display list of games
async function fetchGames() {
const result = await fetch(`https://api.rawg.io/api/platforms?key=${apiKey}`);
    console.log(result);
}

 fetchGames();




