////////    HEADER    ////////

// import json
import data from './data/tabs.json' with {type: 'json'};
const tabsData = data["tabs"];

// création onglets
for(const tab of tabsData){
    const li = document.createElement('li');
    li.textContent = tab["title"];
    li.className = 'infoTab';
    tabs.append(li);

    // création contenu onglets
    const div = document.createElement('div');
    div.id = tab["title"];
    div.style.contentVisibility = 'hidden';
    tabDisplay.append(div);

    // ... nom section
    const h = document.createElement('h3');
    h.textContent = tab["title"];
    div.append(h);

    // ... texte
    if(Array.isArray(tab["text"])){
        for(const para of tab["text"]){
            const p = document.createElement('p');
            p.textContent = para;
            div.append(p);
        };
    }
    else{
        const p = document.createElement('p');
        p.textContent = tab["text"];
        div.append(p);
    }
};

// délégation évènement section menu
tabs.addEventListener('click', (event) => {
    if(event.target.className == 'infoTab'){
        console.log(event.target.textContent);
        displayTab(event.target.textContent);
    };
});

// fonction affichage contenu onglets
function displayTab(tab){
    // none -> tab
    if(tabDisplay.className === ""){
        tabDisplay.className = tab;
        let txt = document.getElementById(tabDisplay.className);
        txt.style.contentVisibility = 'visible';
    }
    // tab -> none
    else if(tabDisplay.className === tab){
        let txt = document.getElementById(tabDisplay.className);
        txt.style.contentVisibility = 'hidden';
        tabDisplay.className = "";
    }
    // tab -> tab
    else{
        let txt = document.getElementById(tabDisplay.className);
        txt.style.contentVisibility = 'hidden';
        tabDisplay.className = tab;
        txt = document.getElementById(tabDisplay.className);
        txt.style.contentVisibility = 'visible';
    };
    console.log('END :>>', tabDisplay.className);
};


////////    JEU    ////////

// création billes + texte boutons
const colors = ['red', 'yellow', 'green', 'blue', 'purple'];
for(const bead in colors){
    const td = document.createElement('td');
    beads.append(td);
    td.className = colors[bead];
};
clearBtn.textContent = 'clear';
submitBtn.textContent = 'submit';

// délégation évènements section jeu
game.addEventListener('click', (event) => {
    if(event.target === clearBtn){
        clearLine();
    }
    else if(event.target === submitBtn){
        endRound();
    }
    else if(colors.includes(event.target.className)){
        selectBead(event);
    }
});

// fonction sélection bille
function selectBead(event){
    const bead = event.target;
    const cell = document.getElementById(tries).querySelector('.empty');
    if(cell !== null){
        cell.className = bead.className;
        cell.addEventListener('click', removeBead);
    }
};

// fonction retrait bille grille
function removeBead(event){
    const bead = event.target;
    console.log('clicked to remove', bead.className);
    bead.className = 'empty';
    bead.removeEventListener('click', removeBead);
};

// fonction vider ligne
function clearLine(){
    const line = document.getElementById(tries).children;
    console.log(line);
    for(const slot of line){
        console.log(typeof(slot));
        if(!(slot.classList.contains('check'))){
            slot.className = 'empty';
        };
    };
};

// création ligne
function newRound(){
    tryCount.textContent = tries;
    console.log('start round', tries);

    const tr = document.createElement('tr');
    tr.id = tries;
    gameDisplay.append(tr);
    
    for(let i = 0; i < codeSize; i++){
        const td = document.createElement('td');
        td.className = 'empty'
        tr.append(td);
    };

    const checkTable = document.createElement('td');
    checkTable.className = 'check';
    tr.append(checkTable);
    for(let i = 0; i < 2; i++){
        const line = document.createElement('tr');
        checkTable.append(line);
        for(let i = 0; i < (codeSize / 2); i++){
            const cell = document.createElement('td');
            cell.className = 'wrong';
            line.append(cell);
        };
    };
};

// fonction submit
function endRound(){
    const line = document.getElementById(tries).children;
    let attempt = [];
    for(const slot of line){
        attempt.push(slot.className);
    };

    if(!attempt.includes('empty')){
        console.log('full line -> end round', tries);
        checkTry(attempt);
    };
};

// fonction vérification fin round
function checkTry(attempt){
    console.log('SUBMIT >>> ', attempt);
    console.log('SOLUTION >>> ', code);
    console.log('match', (attempt.join() === code.join()));  // quickfix dégeulasse
    if(attempt.join() == code.join()){
        victoryDisplay();
    }
    else {
        compareArrays(attempt, code)
        tries--;
        if(tries > 0){
            newRound();
        }
        else {
            defeatDisplay();
        };
    };
}

// fonction comparaison
function compareArrays(attempt, solution){
    let right = [];
    let miss = [];

    // bien placé
    attempt.forEach((bead, index) => {
        if(bead == solution[index]){
            right.push(index);
        };
    });
    console.log('OK >>> ', right);

    // mal placé
    attempt.forEach((beadA, indexA) => {
        solution.forEach((beadS, indexS) => {
            if(beadA == beadS && !right.includes(indexS) && !right.includes(indexA) && !miss.includes(indexS)){
                miss.push(indexS);
            };
        });
    });
    console.log('MISS >>> ', miss);
};

// afficher justes et mal placés ???



// fonction affichage victoire
function victoryDisplay(){

    interactive.style.contentVisibility = 'hidden';

    const h2 = document.createElement('h2');
    h2.textContent = 'I dub thee Mastermind !'
    const p = document.createElement('p');
    p.textContent = `It took you ${11 - tries} attempts to find the code.`
    const table = document.createElement('table');
    endDisplay.append(h2, p, table);

    const tr = document.createElement('tr');
    table.append(tr);

    for(const bead in code){
        const td = document.createElement('td');
        td.className = code[bead];
        tr.append(td);
    };
}

// fonction affichage défaite
function defeatDisplay(){

    interactive.style.contentVisibility;

    const h2 = document.createElement('h2');
    h2.textContent = 'Oh no ...'
    const p = document.createElement('p');
    p.textContent = 'You didn\'t find the code, it was:'
    const table = document.createElement('table');
    endDisplay.append(h2, p, table);

    const tr = document.createElement('tr');
    table.append(tr);

    for(const bead in code){
        const td = document.createElement('td');
        td.className = code[bead];
        tr.append(td);
    };
}






////////    BYPASS TEMPORAIRES    ////////


/*
    NOTES

    fonctionnement :
        - à chaque tentative, une nouvelle ligne apparaît si tries > 0
        - chaque ligne est déjà complète avec une classe empty

    note méthode :
        append = ajoute à la fin
        prepend = ajoute en premier
        --> table.prepend(tr), tr.append(tds)
    _____________________________________________________________

    Découverte géniale (merci Leal) :
        On peut accéder directement à un élément  HTML par son id sans fair une variable JS.
    
    Exemple :
        <ul id="tabs"></ul>
        console.log(tabs)
*/


// essais
let tries = 3;


// code
let codeSize = 6;
let code = ['red', 'red', 'green', 'green', 'purple', 'purple'];


// appel newRound
if(gameDisplay.children.length == 0){
    newRound();
};