
console.log('hello')

async function fetchGames() {
const result = await fetch(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${apiKey}&steamid=76561198168567037&format=json&include_appinfo=true`, 
{method: "GET"});
    
    console.log(result);
}

fetchGames();

