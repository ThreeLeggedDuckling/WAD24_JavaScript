/*  VARIABLE GLOBALES  */

const products = [
    {
        'name': 'Amandes',
        'price': 3.20
    },
    {
        'name': 'Banane',
        'price': 0.80
    },
    {
        'name': 'Citron',
        'price': 0.68
    },
    {
        'name': 'Durian',
        'price': 4.50
    },
    {
        'name': 'Echalote',
        'price': 0.54
    }
]

const billHeader = ['produit', 'prix unitaire', 'quantité', 'sous-total'];

let basket = [];

const catalog = document.querySelector('#catalog');
const bill = document.getElementById('bill');


/*  AFFICHAGE CATALOGUE  */

// const;
products.forEach((product, index) => {
    const row = document.createElement('tr');
    row.className = index;

    let productCell = document.createElement('td');
    productCell.textContent = product['name'];

    let priceCell = document.createElement('td');
    priceCell.textContent = product['price'].toFixed(2);

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

function initBill(){
    const separator = document.createElement('hr');
    const title = document.createElement('h2');
    title.textContent = 'Panier';
    const table = document.createElement('table');
    const emptyBtn = document.createElement('button');
    emptyBtn.id = 'emptyBtn';
    emptyBtn.textContent = 'Vider le panier';

    const header = document.createElement('thead');
    for(colname of billHeader){
        const th = document.createElement('th');
        th.textContent = colname.toUpperCase();
        header.append(th);
    }
    const body = document.createElement('tbody');
    const footer = document.createElement('tfoot');
    for(i = 0; i < 2; i++){
        const line = document.createElement('tr');
        
        let cell;
        if(i % 2 === 0){
            cell = document.createElement('th');
            cell.textContent = 'TOTAL';
        }
        else{
            cell = document.createElement('td');
            cell.id = 'totalCell';
            cell.textContent = 'test';
        }
        cell.colSpan = billHeader.length;

        footer.append(line);
        line.append(cell);
    }

    bill.append(separator, title, table, emptyBtn);
    table.append(header, body, footer);
}

function displayBill(productId){
    let billContent = document.querySelector('tbody');
    if(billContent == null){
        initBill();
        billContent = document.querySelector('tbody');
    }

    for(const product of basket){
        let lineContent = [
            products[productId].name,
            products[productId].price,
            product.quantity,
            products[productId].price * product.quantity
        ];
        console.log('checkLine :>> ', checkLine(productId));

        /*
            CE QUE JE TENTAIS DE REPARER
        */

        if(checkLine(productId)){
            const line = billContent.getElementById(productId);
            for(i = 0; i <= billHeader.length + 2; i++){
                const cell = document.createElement('td');
                cell.textContent = '...';
                newLine.append(cell);
            }
            billContent.append(newLine);
        }
        else{
            const newLine = document.createElement('tr');
            newLine.id = productId;
            for(i = 0; i <= billHeader.length + 2; i++){
                const cell = document.createElement('td');
                cell.textContent = '...';
                newLine.append(cell);
            }
            billContent.append(newLine);
        }

        
    }
}

function checkLine(productId){
    let billContent = document.querySelector('tbody')
    console.log(billContent);
    console.log(document.querySelector(`tbody #${productId}`));
    // if(billContent.getElementById(productId)){

    // }
    for(const line of billContent.children){
        if(line.id === productId)return true;
        else return false;
    }
}

/*  INTERACTIVITE  */

document.addEventListener('click', (event) => {

    if(event.target.classList.contains('addBtn')){
        addToCart(event.target);
    }
    else if(event.target.id == 'emptyBtn'){
        emptyBasket();
    }
})


/* FONCTIONS */

function addToCart(btn) {
    let line = btn.parentElement;
    let quantityValue = line.children[2].firstElementChild.value;
    let addition = {
        'productId': line.className,
        'quantity': quantityValue
    };
    basket.push(addition)
    console.log(basket);
    displayBill(line.className);
}

function addOne(){}
function removeOne(){}
function removeAll(){}


function emptyBasket(){
    console.log('clicked empty');
    console.log(bill.children);
    while(bill.children.length !== 0){
        console.log(bill.children.length);
        bill.removeChild(bill.children[0]);
    }
    basket = [];
}