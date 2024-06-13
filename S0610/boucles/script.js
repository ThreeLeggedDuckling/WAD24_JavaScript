//      CONTINUE

const TAB_NBR = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log("ABS 5");
// for(let i = 0; i < TAB.length; i++){
//     if(TAB[i] === 5)continue
//     console.log(TAB[i]);
// };

// console.log("EVENS");
// for(let i = 0; i < TAB.length; i++){
//     if(TAB[i] % 2  == 1)continue
//     console.log(TAB[i]);
// };

//      BREAK

// console.log("GUESS NBR");

// const SOLUCE = Math.floor(Math.random() * 10);
// console.log(SOLUCE);
// let i = 1;

// while(true){
//     let word = prompt(
//         `Find the word  (try ${i})\n
//         (enter QUIT to quit)\n`);
//     i++;

//     if(word === "QUIT")break
//     if(word === SOLUCE)break
// };
// let txt = document.appendChild('div');
// txt.textContent = "test";


//      FOR OF

const TAB_SEM = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];

// console.log("FOR ... OF ...");
// for (const jour of TAB_SEM) {
//     console.log(jour);
// }

// cont pour éviter modification (valeur passéer en paramètre = ref addresse mémoire)
// let modifTAB_NBR = TAB_NBR
// for (let nbr of modifTAB_NBR) {
//     if (nbr % 2 !== 0) {
//         nbr == 22
//     }
// }
// console.log(modifTAB_NBR);


//      FOREACH

// TAB_SEM.forEach((jour, i, array) => {
//     console.log(`${i} : ${jour}`);
//     console.log(array);
// })

const LI_QSA = document.querySelectorAll('li');
const LI_GBTN = document.getElementsByTagName('li');
// console.log(LI_QSA);
// console.log(LI_GBTN);

// for(const elem of LI_QSA){
//     elem.addEventListener('click', function() {
//         alert(`${elem.textContent} a été ajouté au panier`);
//     });
// }

// for(const elem of LI_GBTN){
//     elem.addEventListener('click', function() {
//         alert(`${elem.textContent} a été ajouté au panier`);
//     });
// }

// LI_QSA.forEach(elem => {
//     elem.addEventListener('click', function() {
//         alert(`${elem.textContent} a été ajouté au panier`);
//     });
// });

// LI_GBTN.forEach(elem => {
//     elem.addEventListener('click', function() {
//         alert(`${elem.textContent} a été ajouté au panier`);
//     });
// });

// Array.from(LI_GBTN).forEach(elem => {
//     elem.addEventListener('click', function() {
//         alert(`${elem.textContent} a été ajouté au panier`);
//     });
// });

TAB_SEM.forEach((jour, i) => {
    if(i < 5){
        console.log(`En Europe, le ${i+1}e jour de la semaine est le ${jour} et est un jour ouvrable.`);
    }
})