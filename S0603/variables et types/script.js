//////// EGALITE ET TYPE ////////

let nombre = 20;

console.log(nombre == 20);          // true
console.log(nombre == "20");        // true

console.log(12 + "8");              // 128
console.log(nombre == 12 + "8");    // false
console.log(nombre == 12 + 8);      // true



//////// CONSTANTES ////////

let add3 = 3 + 3 + "3";
console.log(add3);                  // 63
add3 = 3 + 3 + + "3";
console.log(add3);                  // 9

console.log("Variables : ");
const PI = 3.14;

let ageUtilisateur = 33;
console.log(typeof(ageUtilisateur));

ageUtilisateur = "Bonjour";
console.log(typeof(ageUtilisateur));



//////// PROMPT ////////

console.log("Prompt : ");
ageUtilisateur = prompt("Veuillez entrer votre âge : ");
console.log(typeof(ageUtilisateur));
ageUtilisateur = +ageUtilisateur        // convertion explicite
console.log(typeof(ageUtilisateur));