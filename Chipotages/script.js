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
const total = document.querySelector('#bill tfoot tr:last-of-type td');

let basket = 0
total.textContent = basket.toFixed(2);

const productsCol = productsTable.querySelectorAll('tr td:first-child');
const addCol = productsTable.querySelectorAll('tr td:nth-last-child(2)');
const removeCol = productsTable.querySelectorAll('tr td:last-child');

let prdName, prdTotPrc;
let qntt = {};
productsCol.forEach(product => {
    qntt[`${product.textContent}`] = 0;
});


addCol.forEach(cell => {
    cell.addEventListener('click', () => addTo(cell));
});
removeCol.forEach(cell => {
    cell.addEventListener('click', () => removeFrom(cell));
})


function addTo(cell) {
    prdName = cell.parentElement.children[0].textContent;
    prdPrice = parseFloat(cell.parentElement.children[1].textContent);
    qntt[`${prdName}`]++;
    prdTotPrc = prdPrice * qntt[`${prdName}`];
    prdTotPrc = prdTotPrc.toFixed(2);

    basket += prdPrice;

    if (summary.querySelectorAll(`.${prdName}`).length > 0) {
        summary.querySelector(`.${prdName}`).innerHTML = `<td>${prdName}</td><td>${qntt[`${prdName}`]}</td><td class="priceT">${prdTotPrc}</td>`;
    }
    else {
        summary.innerHTML += `<tr class='${prdName}'><td>${prdName}</td><td>${qntt[`${prdName}`]}</td><td class="priceT">${prdTotPrc}</td></tr>`;
    };
}

function removeFrom(cell) {
    prdName = cell.parentElement.children[0].textContent;
    prdPrice = parseFloat(cell.parentElement.children[1].textContent);
    prdLine = summary.querySelector(`.${prdName}`);
    if (qntt[`${prdName}`] > 0) {
        qntt[`${prdName}`]--;
    }
    prdTotPrc = prdPrice * qntt[`${prdName}`];
    prdTotPrc = prdTotPrc.toFixed(2);

    if (qntt >= 0) {
        basket -= prdPrice;
        }
    console.log(basket);

    if (qntt[`${prdName}`] > 0) {
        prdLine.innerHTML = `<td>${prdName}</td><td>${qntt[`${prdName}`]}</td><td class="priceT">${prdTotPrc}</td>`;
    }
    else {
        prdLine.remove();
    };
};
