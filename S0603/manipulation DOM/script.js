////////   06.03   ////////

const paraLorem = document.getElementById('lorem');
// console.log(paraLorem);
// console.dir(paraLorem);

const paraQuery = document.querySelector("#lorem");
// console.log(paraQuery);

const odds = document.querySelectorAll('ul.elems > li:nth-child(odd)');
// console.log(odds);



////////   06.05   ////////

paraLorem.id = "loremUpdate";
paraLorem.innerHTML = "<strong>Hello</strong>";

paraLorem.innerHTML = "<script>alert('Hello there')</script>";
/* protection navigateur empêche injection script dans HTML
    ... mais marche en dure */
// paraLorem.innerHTML = alert("hello");

console.log(paraLorem);
// paraLorem pointe toujours élément car se màj (en référence)

const paragrp = document.querySelector(".para");
console.log(paragrp.className);
paragrp.classList.add("blue", "strong");
console.log(paragrp.className);
paragrp.className = "red";
console.log(paragrp.className);

const btnTog = document.querySelector("#btnTog");
btnTog.addEventListener('click', function () {
    paragrp.classList.toggle("tog");
})


const inpNbr = document.getElementById("inpNbr");
const inpTxt = document.getElementById("inpTxt");

console.log(inpNbr.value);
console.log(inpNbr.valueAsNumber);
console.log(inpTxt.value);
console.log(inpTxt.valueAsNumber);