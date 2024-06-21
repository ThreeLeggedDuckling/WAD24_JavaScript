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

// récupération sections
const productsTable = document.querySelector('#catalog tbody');
const summary = document.querySelector('#bill tbody');
const total = document.querySelector('#bill tfoot tr:last-of-type td');

const productsCol = productsTable.querySelectorAll('tr td:first-child');
const addCol = productsTable.querySelectorAll('tr td:nth-last-child(2)');
const removeCol = productsTable.querySelectorAll('tr td:last-child');

// déclaration variables globales
let productName, productPrice, productTotPrice;
let quantity = {};
productsCol.forEach(product => {
    quantity[`${product.textContent}`] = 0;
});
total.textContent = (0).toFixed(2);

// ajout eventListner
for(const cell of addCol){
    cell.addEventListener('click', () => addTo(cell));
};
for (const cell of removeCol){
    cell.addEventListener('click', () => removeFrom(cell));
};

// fonction ajout
function addTo(cell) {
    // valeurs variables locales
    productName = cell.parentElement.children[0].textContent;
    productPrice = parseFloat(cell.parentElement.children[1].textContent);
    quantity[`${productName}`]++;
    productTotPrice = (productPrice * quantity[`${productName}`]).toFixed(2);

    // ligne déjà existante
    if (summary.querySelector(`.${productName}`) !== null) {
        const line = summary.querySelector(`.${productName}`);

        const product = line.children[0];
        product.textContent = productName;
        const productQnt = line.children[1];
        productQnt.textContent = quantity[`${productName}`];
        const price = line.children[2];
        price.textContent = productTotPrice;
    }
    // ligne inexistante
    else {
        const newLine = document.createElement('tr');
        newLine.classList.add(`${productName}`);
        summary.append(newLine);

        const product = document.createElement('td');
        product.textContent = productName;
        const productQnt = document.createElement('td');
        productQnt.textContent = quantity[`${productName}`];
        const price = document.createElement('td');
        price.textContent = productTotPrice;
        newLine.append(product, productQnt, price);
    };

    // màj total
    updateTotal();
};

// fonction retrait
function removeFrom(cell) {
    // valeurs variables locales
    productName = cell.parentElement.children[0].textContent;
    const line = summary.querySelector(`.${productName}`);

    // quantité initiale à 1
    if(quantity[`${productName}`] === 1){
        quantity[`${productName}`]--;
        line.remove();
    }
    // quantité initiales > 1
    else if(quantity[`${productName}`] > 1){
        quantity[`${productName}`]--;
        line.children[1].textContent = quantity[`${productName}`];
        productPrice = parseFloat(cell.parentElement.children[1].textContent);
        productTotPrice = (productPrice * quantity[`${productName}`]).toFixed(2);
        line.children[2].textContent = productTotPrice;
    };
    
    // màj total
    updateTotal();
};

// calcul total
function calculateTotal(){
    const subtotals = summary.querySelectorAll('tr td:last-child');
    let basketTotal = 0;
    for(const line of subtotals){
        basketTotal += parseFloat(line.textContent);
    };
    return basketTotal;
};

// affichage total
function updateTotal(){
    total.textContent = calculateTotal().toFixed(2);
};