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
const total = document.querySelector('#bill tfoot td:last-of-type');

const productsCol = productsTable.querySelectorAll('tr td:first-child');
const addCol = productsTable.querySelectorAll('tr td:nth-last-child(2)');
const removeCol = productsTable.querySelectorAll('tr td:last-child');

let prdName, prdTotPrc;
let qntt = {};
productsCol.forEach(product => {
    qntt[`${product.textContent}`] = 0;
});
console.log(qntt);


addCol.forEach(cell => {
    cell.addEventListener('click', () => addTo(cell));
});

removeCol.forEach(cell => {
    cell.addEventListener('click', () => removeFrom(cell));
})


function addTo(cell) {
    prdName = cell.parentElement.children[0].textContent;
    qntt[`${prdName}`]++;
    prdTotPrc = parseFloat(cell.parentElement.children[1].textContent) * qntt[`${prdName}`];
    prdTotPrc = prdTotPrc.toFixed(2);

    if (summary.querySelectorAll(`.${prdName}`).length > 0) {
        summary.querySelector(`.${prdName}`).innerHTML = `<td>${prdName}</td><td>${qntt[`${prdName}`]}</td><td>${prdTotPrc}</td>`;
    }
    else {
        summary.innerHTML += `<tr class='${prdName}'><td>${prdName}</td><td>${qntt[`${prdName}`]}</td><td>${prdTotPrc}</td></tr>`;
    };
}

function removeFrom(cell) {
    prdName = cell.parentElement.children[0].textContent;
    if (qntt[`${prdName}`] > 0){
        qntt[`${prdName}`]--;
    }
    prdTotPrc = parseFloat(cell.parentElement.children[1].textContent) * qntt[`${prdName}`];
    prdTotPrc = prdTotPrc.toFixed(2);

    if ((summary.querySelectorAll(`.${prdName}`).length > 0) && (qntt[`${prdName}`] > 0)) {
        summary.querySelector(`.${prdName}`).innerHTML = `<td>${prdName}</td><td>${qntt[`${prdName}`]}</td><td>${prdTotPrc}</td>`;
    }
    else {
        summary.innerHTML -= `<tr class='${prdName}'><td>${prdName}</td><td>${qntt[`${prdName}`]}</td><td>${prdTotPrc}</td></tr>`;
        summary.textContent = "";
    };
};


// addA.addEventListener('click', () => addOne(addA));
// remA.addEventListener('click', () => removeOne(remA));