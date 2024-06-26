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
const tryCount = document.getElementById('tryCount');
const beads = document.getElementById('beads');
const roundsDisplay = document.getElementById('gameDisplay');

const clearBtn = document.getElementById('clear');
clearBtn.textContent = 'clear';
const submitBtn = document.getElementById('submit');
submitBtn.textContent = 'submit';



// billes
const colors = ["red", "yellow", "green", "blue", "purple"];
for(const bead in colors){
    const td = document.createElement('td');
    beads.append(td);
    td.className = colors[bead];
    td.addEventListener('click', selectBead);
}

// fonction sélection bille
function selectBead(event){
    const bead = event.target;
    console.log('clicked', bead.className);
    const cell = document.getElementById(tries).querySelector('.empty');
    console.log('cell', cell);
    if(cell !== null){
        cell.className = bead.className;
        cell.addEventListener('click', removeBead);
    }
}

// fonction retrait bille grille
function removeBead(event){
    const bead = event.target;
    console.log('clicked to remove', bead.className);
    bead.className = 'empty';
    bead.removeEventListener('click', removeBead);
}


/*
    fonctionnement :
        - à chaque tentative, une nouvelle ligne apparaît si tries > 0
        - chaque ligne est déjà complète avec une classe empty

    note méthode :
        append = ajoute à la fin
        prepend = ajoute en premier
        --> table.prepend(tr), tr.append(tds)
*/


// essais
let tries = 10;
tryCount.textContent = tries;

// création ligne
if (tries > 0){
    const tr = document.createElement('tr');
    tr.id = tries;
    roundsDisplay.append(tr);
    
    for(let i = 0; i < 6; i++){
        const td = document.createElement('td');
        td.className = 'empty'
        tr.append(td);
    }
}






// for(let i = tries; i >= 1; i--){
//     const tr = document.createElement('tr');
//     tr.id = i;
//     roundsDisplay.append(tr);
    
//     for(let i = 0; i < 6; i++){
//         const td = document.createElement('td');
//         td.className = 'empty'
//         tr.append(td);
//     }
// }
// console.log(roundsDisplay.children);





