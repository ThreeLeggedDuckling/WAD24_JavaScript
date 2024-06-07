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

const newLine = document.createElement("tr");
const prdCell = document.createElement("td");
const qnttCell = document.createElement("td");
const pricCell = document.createElement("td");

const testCellA = productsTable.firstElementChild.children[2];
const testCellB = productsTable.firstElementChild.children[3];

let prdName, prdQntt = 0, prdTotPrc;

testCellA.addEventListener('click', function(){


    prdName = testCellA.parentElement.children[0].textContent;
    prdQntt++;
    prdTotPrc = parseFloat(testCellA.parentElement.children[1].textContent) * prdQntt;
    prdTotPrc = prdTotPrc.toFixed(2);

    let _prdName = document.createTextNode(prdName);
    prdCell.appendChild(_prdName);
    let _prdQntt = document.createTextNode(prdQntt);
    qnttCell.appendChild(_prdQntt);
    let _prdTotPrc = document.createTextNode(prdTotPrc);
    pricCell.appendChild(_prdTotPrc);

    newLine.appendChild(prdCell);
    newLine.appendChild(qnttCell);
    newLine.appendChild(pricCell);

    summary.appendChild(newLine);

    console.log(prdName, prdQntt, prdTotPrc);
});