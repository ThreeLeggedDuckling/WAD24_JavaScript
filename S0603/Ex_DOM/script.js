// récupération valeur E àpd C

const elemC = document.getElementById("depart");
console.log("C : ", elemC);

const elemE = elemC.parentElement.lastElementChild.innerText;
console.log("E : ", elemE);

const elemB = elemC.parentElement.children[1].innerText;
console.log("B : ", elemB);

const elemEByP = document.getElementsByTagName("p")[4].innerText;
console.log("E By P : ", elemEByP);


// récupération valeur E àpd div

const elemDiv = document.getElementsByTagName("div");

const elemEByDivChildren = elemDiv[0].children[elemDiv[0].childElementCount - 1].innerText;
console.log("E By Div Children : ", elemEByDivChildren);

const elemEByDivItem = elemDiv.item(0).lastElementChild.innerText;
console.log("E By Div Item : ", elemEByDivItem);



// récupération impaires
const odds = document.querySelectorAll('ul li:nth-child(even)');
console.log(odds);

odds.forEach(element => {
    console.log(element.innerText);
});