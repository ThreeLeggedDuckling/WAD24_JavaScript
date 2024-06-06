///////   EXEMPLE   ///////

const exmplYellow = document.querySelector('.exmplYellow');
const exmplBlue = document.querySelector('.exmplBlue');

let exmplColor;
let case1 = document.querySelector('#exmplCanvas tr td');

exmplYellow.addEventListener('click', function(){
    exmplColor = exmplYellow.textContent;
    console.log(exmplYellow);
});
exmplBlue.addEventListener('click', function(){
    exmplColor = exmplBlue.textContent;
    console.log(exmplBlue);
});

case1.addEventListener('click', function(){
    case1.classList.toggle(exmplColor);
    console.log(case1);
})



///////   EXERCICE   ///////

const red = document.querySelector('.R');
const yellow = document.querySelector('.J');
const blue = document.querySelector('.B');
const black = document.querySelector('.N');

let currentColor;
red.addEventListener('click', function(){
    currentColor = red.textContent;
});
yellow.addEventListener('click', function(){
    currentColor = yellow.textContent;
});
blue.addEventListener('click', function(){
    currentColor = blue.textContent;
});
black.addEventListener('click', function(){
    currentColor = black.textContent;
});

let cells = document.querySelectorAll('#canvas tr td');
console.dir(cells);
cells.forEach(cell => {
    cell.addEventListener('click', function(){
        cell.classList.toggle(currentColor);
    });
});