/*
    RAPPELS

    1. BOUCLES

    for ... in
        Sur ensemble K-v
    for ... of
        Sur valeurs
    foreach
        Moins bien (moins opti) et plus vieux que for ... of, généralement pas besoin des infos supplémentaires obtenabes
    do while
        Exécute bloc d'instruction et vérifie si faut relancer
        Différent de while sur première itiration : si faut s'exécute quand même 1x

*/


////////   CORRECTION EXO CARRE   ////////

/*
    Créer fonction qui prend un nbr en paramètre et affiche son carré.
    Le nombre entré doit être un input de type nombre et le résultat affiché dans un autre lors du click sur un bouton "Calculer".
*/

const BTN = document.getElementById('calculer');
BTN.addEventListener('click', calculateSqr);

function squareOf(number){
    return number * number;
}

function calculateSqr(){
    let squared = document.getElementById('resultat');
    let userInput = document.getElementById('valeur').valueAsNumber;
    squared.valueAsNumber = squareOf(userInput);
}


// Demonstration pour si appuis sur 'entrer'

const DEMO_INPUT = document.getElementById('demoVal');
DEMO_INPUT.addEventListener('keyup', DemoEnter);

function DemoEnter(event){
    if (event.key !== "Enter")return;

    console.log(DEMO_INPUT.value);
}

