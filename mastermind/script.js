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

// base jeu

// essais
const tryCount = document.getElementById('tryCount');
let tries = 10;
tryCount.textContent = tries;

// jeu
const roundsDisplay = document.getElementById('gameDisplay');
console.log(roundsDisplay);

// billes
const beads = document.getElementById('beads');
const colors = ["red", "yellow", "green", "blue", "purple"];
for(const bead in colors){
    const td = document.createElement('td');
    beads.append(td);
    td.className = colors[bead];
    td.addEventListener('click', selectBead);   // fonction  en définition 
}


/*
    fonctionnement :
        à chaque tentative, une nouvelle ligne est créée si tries > 0
        chaque ligne est déjà complète avec une classe emptyCase
        faire style CSS emptyCase -> border / box-shadow ?

    note méthode :
        append = ajoute à la fin
        prepend = ajoute en premier
        --> table.prepend(tr), tr.append(tds)
*/


// à reprendre
function selectBead(event){
    const bead = event.target;
    console.log('clicked', bead.className);

    const lines = roundsDisplay.children;
    if(lines.length < 10){
        const line = document.createElement('tr');
    }

    // if(lines.length <= 6){
    //     if(lines.children <=)
    //     const tr = document.createElement('tr');
    //     const td = document.createElement('td');
    //     roundsDisplay.append(tr);
    //     tr.append(td)
    // }
}
