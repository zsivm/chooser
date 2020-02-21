let number = 0;

function init() {
    addItem();
    changeFocus();
}

// adds an item input with corresponding delete button
function addItem() {
    // main container with id
    let oItemCont = document.createElement("div");
    oItemCont.id = "cont" + number;

    // input field
    let oItemInput = document.createElement("input");
    oItemInput.id = "input" + number;
    oItemInput.placeholder = "Add an item...";
    oItemInput.addEventListener('keypress', function(e) {
        if(e.key === 'Enter') {
            if(document.getElementById("input" + (number - 1)).value !== "") {
                addItem();
                changeFocus();
            }
        }
    });

    // remove button
    let oRemoveBtn = document.createElement("button");
    oRemoveBtn.onclick = removeItem;
    oRemoveBtn.innerHTML = "X";

    // append field and delete to parent
    oItemCont.appendChild(oItemInput);
    oItemCont.appendChild(oRemoveBtn);

    // append parent to outer div
    let oItems = document.getElementById("items");
    oItems.appendChild(oItemCont);

    number++;
}

// removes an item row
function removeItem(e) {
    let parentDivId = e.currentTarget.parentNode.id;
    let div = document.getElementById(parentDivId);
    div.parentNode.removeChild(div);
}

// chooses item and displays it on the screen
function chooseItem() {
    let oItems = document.getElementById("items").childNodes;
    if(oItems.length < 1) console.log("No items added");
    
    let aItems = [];
    oItems.forEach(node => {
        aItems.push(node.getElementsByTagName("INPUT")[0].value);
    });

    let nRndNum = Math.floor(Math.random() * aItems.length);
    let sChoosenItem = oItems[nRndNum].getElementsByTagName("INPUT")[0].value;

    document.getElementById("result").innerHTML = sChoosenItem;
}

function changeFocus() {
    document.getElementById("input" + (number - 1)).focus();
}