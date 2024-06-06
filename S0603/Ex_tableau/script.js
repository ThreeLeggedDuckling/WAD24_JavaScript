///////   EXEMPLE   ///////

const yellow = document.querySelector('.exmplYellow');
const blue = document.querySelector('.exmplBlue');

let currentColor;
let case1 = document.querySelector('#canvas tr td');

yellow.addEventListener('click', function(){
    currentColor = yellow.textContent;
    console.log(yellow);
});
blue.addEventListener('click', function(){
    currentColor = blue.textContent;
    console.log(blue);
});

case1.addEventListener('click', function(){
    case1.classList.toggle(currentColor);
    console.log(case1);
})



///////   EXERCICE   ///////

