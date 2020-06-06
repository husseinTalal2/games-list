const PLATFORMS = [
    { id: 34, name: "Android" },
    { id: 14, name: "Mac" },
    { id: 48, name: "PlayStation 4" },
    { id: 39, name: "iOS" },
    { id: 3, name: "Linux" },
    { id: 6, name: "PC (Microsoft Windows)" },
    { id: 49, name: "Xbox One" }
  ];




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

so make sure to consider it in all platforms

*/