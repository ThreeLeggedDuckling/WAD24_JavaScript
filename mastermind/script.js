////////    HEADER    ////////

// import json
import data from './data/tabs.json' with {type: 'json'};
const tabsData = data["tabs"];

// récupération éléments DOM
const tabs = document.getElementById('tabs');
const tabDisplay = document.getElementById('tabDisplay');

// création onglets
for(const tab of tabsData){
    const li = document.createElement('li');
    li.textContent = tab["title"];
    li.addEventListener('click', displayTab);
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

// fonction affichage contenu onglets
function displayTab(event){
    const tab = event.target.textContent;
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
};


////////    JEU    ////////

// récupération éléments DOM
const interactive = document.getElementById('interactive');
const tryCount = document.getElementById('tryCount');
const endDisplay = document.getElementById('ending');
const beads = document.getElementById('beads');
const roundsDisplay = document.getElementById('gameDisplay');
const clearBtn = document.getElementById('clear');
const submitBtn = document.getElementById('submit');


// ajout fonctionnalité boutons
clearBtn.textContent = 'clear';
clearBtn.addEventListener('click', clearLine);
submitBtn.textContent = 'submit';
submitBtn.addEventListener('click', endRound);

// création billes
const colors = ['red', 'yellow', 'green', 'blue', 'purple'];
for(const bead in colors){
    const td = document.createElement('td');
    beads.append(td);
    td.className = colors[bead];
    td.addEventListener('click', selectBead);
};

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
    for(const slot of line){
        slot.className = 'empty';
    };
};

// création ligne
function newRound(){
    tryCount.textContent = tries;
    console.log('start round', tries);
    const tr = document.createElement('tr');
    tr.id = tries;
    roundsDisplay.append(tr);
    
    for(let i = 0; i < codeSize; i++){
        const td = document.createElement('td');
        td.className = 'empty'
        tr.append(td);
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
*/

// essais
let tries = 3;


// code
let codeSize = 6;
let code = ['red', 'red', 'green', 'green', 'purple', 'purple'];


// appel newRound
if(roundsDisplay.children.length == 0){
    newRound();
};