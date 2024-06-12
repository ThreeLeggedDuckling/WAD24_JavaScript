/*
CONSIGNES :

- utilisateur doit pouvoir choisir boisson entre {1 : 'Eau'; 2 : 'Coca-Cola', 3 : 'Sprite'; 4 : 'Oasis'}
    -> vérification entrée valide (indiquer si non)
        -> vérifier stock sélection
            -> fournir cannette
            -> décrémenter stock
        -> indiquer 'SOLD OUT'
*/

// récupération éléments
const P_LIST = document.querySelectorAll('#products tr:last-child td');
const DOOR = document.querySelector('#door td:nth-child(2)');
const DISPLAY = document.querySelector('#info');
const INPUT_DSP = document.querySelector('#inpt');
const NUMPAD = document.querySelectorAll('#numPad td:not(#validate, #reset)');
const VALIDATE = document.querySelector('#validate');
const RESET = document.querySelector('#reset');

// définition objets
const PRODUCTS = {
    1 : "Eau",
    2 : "Coca-Cola",
    3 : "Sprite",
    4 : "Oasis"
};
let stock = {
    "Eau" : 10,
    "Coca-Cola" : 10,
    "Sprite" : 10,
    "Oasis" : 10
};

// définition default display + timeout
function idleDisplay(){
    DISPLAY.textContent = "ENTER SELECTION";
};
function clearInputD(){
    INPUT_DSP.textContent = "";
};
function tempDisplay(ms){
    clearInputD();
    // event.stopPropagation();     verifier comment faire
    setTimeout(idleDisplay, ms);
}
function closeDoor(){
    DOOR.textContent = "";
    DOOR.parentElement.classList.remove('open');
}
function openDoor(){
    DOOR.parentElement.classList.add('open');
    DOOR.textContent = `${PRODUCTS[INPUT_DSP.textContent]}`;
    setTimeout(closeDoor, 3000);
}

// afficher produits
let i = 1;
P_LIST.forEach(cell => {
    cell.innerHTML = `<td id=${PRODUCTS[i]}>${PRODUCTS[i]}</td>`;
    i++;
});

// addEventListner chiffres
NUMPAD.forEach(cell => {
    cell.addEventListener('click', function(){
        if(INPUT_DSP.textContent.length < 2){
            INPUT_DSP.textContent += cell.textContent;
        }
    })
});

// addEventListner reset
RESET.addEventListener('click', function(){
    clearInputD();
});

// addEventListner validate
VALIDATE.addEventListener('click', function(){

    console.log("new input");
    console.log(stock[PRODUCTS[INPUT_DSP.textContent]]);

    if(PRODUCTS[INPUT_DSP.textContent] == undefined){
        console.log("invalid");

        DISPLAY.textContent = "INVALID SELECTION";
        tempDisplay(2000);
    }
    else{
        console.log("valid");
        if(stock[PRODUCTS[INPUT_DSP.textContent]] <= 0){
            console.log("SOLD OUT");

            DISPLAY.textContent = "SOLD OUT";
            tempDisplay(2000);
        }
        else{
            console.log("door");

            stock[PRODUCTS[INPUT_DSP.textContent]]--;
            openDoor();
        
            DISPLAY.textContent = "ENJOY YOUR DRINK";
            tempDisplay(3000);
        }
    }
});