const PLATFORMS = [
    { id: 34, name: "Android" },
    { id: 14, name: "Mac" },
    { id: 48, name: "PlayStation 4" },
    { id: 39, name: "iOS" },
    { id: 3, name: "Linux" },
    { id: 6, name: "PC (Microsoft Windows)" },
    { id: 49, name: "Xbox One" }
  ];
const URL = "https://bip17.csb.app/games.json";
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('search-input');
const platformInput = document.getElementById('platform-select');
const gamesList = document.getElementById('games-holder');
const gameSummary = document.getElementById('summary-list');
let games ; 
searchBtn.addEventListener('click', e => {
    e.preventDefault();
    fetch("games.json")
    .then(response => response.json())
    .then(games => filterGames(games))
})

//function to filter the games and store it in an array according to the inputs and send it to another function to display it 

function filterGames(gamesArray){
    const filteredGamesArray = gamesArray.filter(game => {
        const input = searchInput.value.toLowerCase();
        const platform = platformInput.value;
        const gameName = game.name.toLowerCase();
        return (platform === "-1") ? game && gameName.includes(input) : game.platforms.includes(parseInt(platform)) && gameName.includes(input)
    })
    displayGames(filteredGamesArray);
}
//function to display the filterd games
function displayGames(filteredGamesArray){
    gamesList.innerHTML = "";
    filteredGamesArray.forEach(game => {
        const gameItem = document.createElement('p');
        gameItem.innerText = `${game.name}`
        gamesList.appendChild(gameItem);
    })
}

//function to show number of games in each platform

function platformSummary(){
    platformsNumberOfGames = {};
    fetch("games.json")
    .then(response => response.json())
    .then(games => {
        games.reduce((acc, game) => {
            game.platforms.forEach(platform => {
                if(!acc.hasOwnProperty(platform))
                    acc[platform] = 0;
                acc[platform]++;
            })
            return acc;
        }, platformsNumberOfGames)
    })
    console.log(platformsNumberOfGames)
    displayGamesSummary(platformsNumberOfGames);
} 
function displayGamesSummary(numberOfGamesArray){

}
platformSummary();


/*
Instructions:
You have a 1000 game, all of them fall into thse platforms
Implement the search functionality
The games are inside games.json file and you can fetch
using this url:
Games URL = "https://bip17.csb.app/games.json"

the search should be done by using the 
filter function over the name property of each game

you should also check if the user has selected a specific platform
in the select box, you shouldn't show results of 
Android game for example if the user is searching for Xbox One games

Fill the dom with the search results

It might be helpful to map the games into simpler objects

If you still got time, use the reduce function to reduce the games into
count by platform like the following: The numbers are examples only

* Play Station 4: 100 games
* Android: 48 games
...

You can use the PLATFORMS ids above to aggregate the games you have.
Some games are available for multiple platforms, you can see that in the 
platfomrs attribute of each game for example: 
{
  platforms: [6, 48, 9]
}

so make sure to consider it in all platforms*/