////////     EXERCICE PIZZA     ////////

const margarita = document.querySelector('#xmpl li');
const prcMarg = parseFloat(document.querySelector('#prcMarg').textContent);

const quant = document.getElementById('pizzaQ');
const sumQ = document.getElementById('pizzaS');
let iQ = parseInt(quant.textContent);
let iS = parseFloat(sumQ.textContent);

margarita.addEventListener('click', function () {
    iQ++;
    iS += prcMarg;
    quant.innerText = iQ;
    sumQ.innerText = iS;
});

margarita.addEventListener('click', function () {
    sumQ.innerText = parseFloat(sumQ.textContent) + prcMarg;
})



////////     CHIPOTAGEs PERSO     ////////

const productsTable = document.querySelector('#catalog tbody');
const summary = document.querySelector('#bill tbody');
const total = document.querySelector('#bill tfoot td:last-of-type')
// console.log(total.textContent);


const addA = productsTable.firstElementChild.children[2];
const remA = productsTable.firstElementChild.children[3];

let prdName, prdQntt = 0, prdTotPrc;

function addTo(cell){
    prdName = cell.parentElement.children[0].textContent;
    prdQntt++;
    prdTotPrc = parseFloat(cell.parentElement.children[1].textContent) * prdQntt;
    prdTotPrc = prdTotPrc.toFixed(2);

    summary.innerHTML += `<tr><td>${prdName}</td><td>${prdQntt}</td><td>${prdTotPrc}</td></tr>`;
}

addA.addEventListener('click', addTo(addA));

remA.addEventListener('click', function(){

    prdName = addA.parentElement.children[0].textContent;
    prdQntt--;
    prdTotPrc = parseFloat(addA.parentElement.children[1].textContent) * prdQntt;
    prdTotPrc = prdTotPrc.toFixed(2);

    console.log(prdName, prdQntt, prdTotPrc);

    summary.innerHTML += `<tr><td>${prdName}</td><td>${prdQntt}</td><td>${prdTotPrc}</td></tr>`;
});