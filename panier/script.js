/*  VARIABLE GLOBALES  */

const products = [
    {
        'nom': 'Amandes',
        'prix': 3.20
    },
    {
        'nom': 'Banane',
        'prix': 0.80
    },
    {
        'nom': 'Citron',
        'prix': 0.68
    },
    {
        'nom': 'Durian',
        'prix': 4.50
    },
    {
        'nom': 'Echalote',
        'prix': 0.54
    }
]       // normalement viendrait d'une db

let basket = {};


/*  AFFICHAGE CATALOGUE  */

const catalog = document.querySelector('#catalog');
console.log(catalog);
products.forEach((product, index) => {
    const row = document.createElement('tr');
    row.className = index;

    let productCell = document.createElement('td');
    productCell.textContent = product['nom'];

    let priceCell = document.createElement('td');
    priceCell.textContent = product['prix'].toFixed(2);

    let quantityCell = document.createElement('td');
    let quantitySelect = document.createElement('select');
    quantitySelect.name = 'quantity';
    for(let i = 1; i <= 10; i++){
        let quantityValue = document.createElement('option');
        quantityValue.value = i;
        quantityValue.textContent = i;
        quantitySelect.append(quantityValue);
    }

    let addBtn = document.createElement('td');
    addBtn.className = 'addBtn';
    addBtn.textContent = 'ajouter';

    catalog.append(row);
    row.append(productCell, priceCell, quantityCell, addBtn);
    quantityCell.append(quantitySelect);
});
/*
    même chose que de faire boucle for ... of
    mais sans devoir utiliser products.indexOf(product) pour obtenir l'index :

    for(const product of products){
    ...
    addBtn.className = `addBtn ${products.indexOf(product)}`;
    ...
    }
*/


/*  AFFICHAGE PANIER  */

const bill = document.

/*  INTERACTIVITE  */

console.log(catalog);
catalog.addEventListener('click', (event) => {

    if(event.target.classList.contains('addBtn')){
        addToCart(event.target);
    }
})




/* FONCTIONS */

function addToCart(btn) {
    let line = btn.parentElement;
    let quantityValue = line.children[2].firstElementChild.value;
    basket[line.className] = quantityValue;
}








/*      ANCIENNE VERSION

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

*/