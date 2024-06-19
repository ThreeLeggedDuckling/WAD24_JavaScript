// récupération éléments DOM
const rules = document.getElementById('rules');
const howto = document.getElementById('how');
const tabTitle = document.getElementById('title');
const tabContent = document.getElementById('content');

rules.addEventListener('click', displayRules);

function displayRules(){
    const title = "Rules";
    tabTitle.textContent = title;

    const txt = "dghsfksdhfksdhfkdsfhskdf";
    tabContent.textContent = txt;
}