let number = 0;

// adds a game input with corresponding delete button
function addGame() {
    // main container with id
    let oGameCont = document.createElement("div");
    oGameCont.id = "cont" + number;
    number++;

    // input field
    let oGameInput = document.createElement("input");
    oGameInput.placeholder = "Add a game...";

    // remove button
    let oRemoveBtn = document.createElement("button");
    oRemoveBtn.onclick = removeGame;
    oRemoveBtn.innerHTML = "X";

    // append field and delete to parent
    oGameCont.appendChild(oGameInput);
    oGameCont.appendChild(oRemoveBtn);

    // append parent to outer div
    let oGames = document.getElementById("games");
    oGames.appendChild(oGameCont);
}

// removes a game row
function removeGame(e) {
    let parentDivId = e.currentTarget.parentNode.id;
    let div = document.getElementById(parentDivId);
    div.parentNode.removeChild(div);
}

// chooses game and displays it on the screen
function chooseGame() {
    let oGames = document.getElementById("games").childNodes;
    if(oGames.length < 1) console.log("No games added");
    
    let arr = [];
    oGames.forEach(node => {
        arr.push(node.getElementsByTagName("INPUT")[0].value);
    });

    let rndNum = Math.floor(Math.random() * arr.length);
    let winner = oGames[rndNum].getElementsByTagName("INPUT")[0].value;

    document.getElementById("result").innerHTML = winner;
}