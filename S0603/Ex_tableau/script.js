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

const PALETTE = document.querySelectorAll('#palette td');
const CELLS = document.querySelectorAll('#canvas tr td');
let currentColor;

PALETTE.forEach(cell => {
    cell.classList.add(`${cell.textContent}`);
    cell.addEventListener('click', function(){
        currentColor = cell.textContent;
    });
});

CELLS.forEach(cell => {
    cell.addEventListener('click', function(){
        if(cell.classList.length > 0 && cell.className != currentColor){
            cell.classList.replace(cell.className, currentColor);
        }
        else{
            cell.classList.toggle(currentColor);
        }
    })
})