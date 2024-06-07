/*
const platsBT = document.getElementsByTagName('li');
    // getElementBy...() plus vraiment utilisé
console.log(platsBT);
*/

const plats = document.querySelectorAll('li');
console.log(plats);

const margarita = document.querySelector('li');
console.log(margarita.innerHTML);
console.log(margarita.textContent);

///   ajout 1 élément dans pâtes   ///
const listePates = document.querySelector('#pasta_list');
listePates.innerHTML += "<li>Quatre fromages</li>";

// ajout classe .red a premier enfant listePates
const carbo = document.querySelector('#pasta_list li');
carbo.classList.add('red');
/* version alt
listePates.firstElementChild.classList.add('red');
*/


///   Node vs Element   ///
console.log('fisrtChild', margarita.firstChild);
console.log('fisrtElementChild', margarita.firstElementChild);


///   ajout eventListner bouton   ///

/*
btn.onclick = function(){
    alert('message envoyé');
};
btn.onclick = function(){
    console.log('message envoyé');
};

    // onclick se comporte comme variable, donc 2e vient écraser 1er
*/

const btn = document.getElementById('btn_send');
btn.addEventListener('click', function () {
    alert('message envoyé');
});
btn.addEventListener('click', function () {
    console.log('message envoyé');
});

///   récupération valeurs   ///

btn.addEventListener('click', function () {
    const pseudo = document.getElementById('pseudo').value;
    const message = document.getElementById('message').value;
    alert('PSEUDO :\n  ' + pseudo + '\nMESSAGE :\n  ' + message);
});

///   exercice "panier"   ///

margarita.addEventListener('click', function () {
    const sumQ = document.getElementById('sum');
    const price = parseFloat(document.querySelector('#price').textContent);
    const qAdded = document.querySelector('#add').valueAsNumber;
    sumQ.innerText = qAdded * price;
})


///   chippotage   ///
const produits = document.querySelectorAll('#chipotage tr')
console.log(produits);

for (let i; i < produits.length; i++) {
    produits[i][0].id = "prd" + i;
    produits[i].lastElementChild.id = "price" + i;
    console.log(i);
    console.log(produits[i]);
    console.log(produits[i][0].id);
}