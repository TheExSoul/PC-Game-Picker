

export function handleClick() {
    console.log("hello")
}

// console.log('hello')

async function fetchGames() {
const result = fetch(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=ECC9AA477EA7038A7632378B2507747D&steamid=76561198168567037&format=json&include_appinfo=true`, 
{method: "GET"});
    
    console.log(result);
}

 fetchGames();

// var steamid = document.getElementById()


