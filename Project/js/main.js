// 3EB3F0303A0ACCB901F499905F1EF931
// Steam Key for API implementation 


// 76561198167501965
// My user ID for testing purposes

async function getUserSteamGames() {
    try {
        // FETCH for all information of owned games of the user
        const response = await fetch("http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=3EB3F0303A0ACCB901F499905F1EF931&steamid=76561198167501965&include_appinfo=true&format=json");
        let steamObject = await response.json();

        // For debugging
        //console.log(steamObject);

        // Sorting the necessary information 
        let steamGames = [];
        steamObject.response.games.forEach(element => {
            steamGames.push({ gameName: element.name, gameImg: element.img_icon_url, gameId: element.appid });
        });

        // For debugging
        //console.log(steamGames);

        // Return result of foreach
        return steamGames;

    } catch (error) {
        //NOT Finished
        // Simple catching error
        console.error(error);
        // return of an empty array 
        return [];
    }
}

// Debugging and Testing 
getUserSteamGames();


// exemple of whats possible
async function displaySteamGames() {
    try {
        let games = await getUserSteamGames();

        for (i = 0; i < games.length; i++) {
            let div = document.getElementById("showAll");
            let createDiv = document.createElement("div")
            let createImg = document.createElement("img");
            let createH4 = document.createElement("h4");

            createImg.src = `http://media.steampowered.com/steamcommunity/public/images/apps/${games[i].gameId}/${games[i].gameImg}.jpg`;
            createImg.alt = games[i].gameName;
            createH4.innerText = games[i].gameName;

            div.append(createDiv);
            createDiv.classList.add('hideMe');
            createDiv.append(createImg, createH4);
        };

    } catch (error) {

        console.error(error);

    } finally {

        nSplice(10);

    };
};

function nSplice(n){
    let getDiv = document.querySelectorAll('.hideMe');
    getDiv = Array.from(getDiv);

    if(getDiv != undefined){
        let splicer = getDiv.splice(0, n);
        for(let i = 0; i < splicer.length; i++){

            splicer[i].classList.remove('hideMe');
            
        };
    };
};

let btn = document.querySelector('.loadMore');

btn.addEventListener('click', () =>{
    nSplice(50);
});


// exemple of whats possible
displaySteamGames();
