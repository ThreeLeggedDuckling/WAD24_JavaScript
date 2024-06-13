/*
    On distingue les fonctions des procédures car elles retournent quelque chose.
*/

// procédure (fait juste affichage)
function PlusDeux(nbr){
    console.log(nbr+2);
};
// PlusDeux(4);

// fonction retournant valeur sans l'afficher
function RetourPlusDeux(nbr){
    return nbr + 2;
};
// console.log(RetourPlusDeux(4));


/*
    Une fonction modifie une copie d'une valeur en attribut.
*/

let exemple = 5;
RetourPlusDeux(exemple);
console.log(exemple);
exemple = RetourPlusDeux(exemple);
console.log(exemple);

function VraiPlusDeux(nbr){
    nbr = nbr + 2;
    return nbr;
}


/*
    ... si c'est une valeur simple (nombre, booléen). Pour les valeurs complexes (listes) on modifie la valeur originale.
*/

const mots = ["Bonjour", "nous", "sommes", "mercredi"];
function ModifierJour(mots){
    mots[3] = "jeudi";
    console.log(mots);
}
console.log(mots);
ModifierJour(mots);     // paramètre en référence
console.log(mots);

let exmplSP = VraiPlusDeux();
console.log(exmplSP);

function CLPlusdeux(nbr = 150){
    nbr = nbr + 2;
    return nbr;
};
exmplSP = CLPlusdeux();
console.log(exmplSP);


/*
    Les fonctions anonymes sont appellées en callback dans une autre fonction ou enregistrées dans une variable ou une liste.
*/

let exmplAnon = function(param1, param2){
    return param1 + param2;
};
console.log(exmplAnon(3, 9));


/*
    Les fonctions flêchées sont des fonctions anonymes raccourcies.
*/

let exmplFlch1 = (param1, param2, param3) => console.log(`Bonjour je suis ${param1} ${param2}, j'ai ${param3} ans.`);
exmplFlch1("Jean", "Jacques", 59);

/*
    S'il n'y a qu'une instruction, le return est implicite.
*/

let exmplFlch2 = (nbr1, nbr2) => nbr1 + nbr2;
console.log(exmplFlch2(7, 4));



////////     Exercice     ////////

/*
    Créer fonction qui prend un nbr en paramètre et affiche son carré.
    Le nombre entré doit être un input de type nombre et le résultat affiché dans un autre lors du click sur un bouton "Calculer".
*/

let userInpt = document.getElementById('valeur').valueAsNumber;
let inptSquare = document.getElementById('resultat');
const BTN = document.getElementById('calculer');

BTN.addEventListener('click', function(){
    inptSquare.valueAsNumber = userInpt * userInpt;
});