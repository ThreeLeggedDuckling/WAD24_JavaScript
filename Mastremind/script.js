// import json
import data from './data/tabs.json' with { type: 'json' };
const tabsData = data["tabs"];

// récupération éléments DOM
const tabs = document.getElementById('tabs');
const tabDisplay = document.getElementById('tabDisplay');

// création onglets
for(const tab of tabsData){
    const li = document.createElement('li');
    li.textContent = tab["title"];
    li.addEventListener('click', tabView);
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

function tabView(event){
    const tab = event.target.textContent;
    if(tabDisplay.className === ""){
        tabDisplay.className = tab;
        let txt = document.getElementById(tabDisplay.className);
        txt.style.contentVisibility = 'visible';
    }
    else if(tabDisplay.className === tab){
        let txt = document.getElementById(tabDisplay.className);
        txt.style.contentVisibility = 'hidden';
        tabDisplay.className = "";
    }
    else{
        let txt = document.getElementById(tabDisplay.className);
        txt.style.contentVisibility = 'hidden';
        tabDisplay.className = tab;
        txt = document.getElementById(tabDisplay.className);
        txt.style.contentVisibility = 'visible';
    };
};