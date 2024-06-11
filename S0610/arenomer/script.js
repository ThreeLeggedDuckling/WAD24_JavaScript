////////    AGE     ////////
/*
let age = parseInt(prompt("Age :"));
console.log(age);

if (!isNaN(age)) {
    if (age > 66) {
        console.log("retraité");
    }
    else if (age > 25) {
        console.log("travailleur");
    }
    else if (age > 0) {
        console.log("étudiant");
    }
    else {
        console.log("pané");
    }
}
else {
    console.log("On voulait un nombre ...");
}
*/


////////    LOGIN     ////////
/*
const login = "johndoe@mail.com";
const psw = "Test1234=";

let userLogin = prompt("LOGIN");
let userPsw = prompt("PASSWORD");

if(userLogin == login && userPsw == psw){
    alert("identification succeed");
}
else{
    alert("identification failed")
}
*/


////////    CALCULATRICE v1     ////////

const btn = document.querySelector('#exe');

btn.addEventListener('click', function(){
    let nbrA = parseFloat(document.getElementById('nbrA').value);
    let nbrB = parseFloat(document.getElementById('nbrB').value);
    let oper = document.getElementById('operator').value;
    
    if(isNaN(nbrA) || isNaN(nbrB)){
        alert("ERROR : invalid input")
    }
    else{
        switch(oper){
            case "*" :
                alert(`${nbrA} ${oper} ${nbrB} = ${(nbrA * nbrB).toFixed(2)}`);
                break
            case "/" :
                if(nbrB != 0){
                    if(Number.isInteger(nbrA / nbrB)){
                        alert(`${nbrA} ${oper} ${nbrB} = ${(nbrA / nbrB)}`);
                    }
                    else{
                        alert(`${nbrA} ${oper} ${nbrB} = ${(nbrA / nbrB).toFixed(2)}`);
                    }
                }
                else{
                    alert("Alors techniquement ça marche pas vraiment, désolé");
                }
                break
            case "%" :
                if(nbrB != 0){
                    if(Number.isInteger(nbrA % nbrB)){
                        alert(`${nbrA} ${oper} ${nbrB} = ${(nbrA % nbrB)}`);
                    }
                    else{
                        alert(`${nbrA} ${oper} ${nbrB} = ${(nbrA % nbrB).toFixed(2)}`);
                    }
                }
                else{
                    alert("Comment dire ...");
                }
                break
            case "+" :
                alert(`${nbrA} ${oper} ${nbrB} = ${nbrA + nbrB}`);
                break
            case "-" :
                alert(`${nbrA} ${oper} ${nbrB} = ${nbrA - nbrB}`);
                break
        }
    }
});



////////    CALCULATRICE v2     ////////

const display = document.querySelector('thead td');
const numKeys = document.querySelectorAll('tbody tr:not(:last-child) td:not(:last-child), tbody tr:last-child td:first-child, tbody tr:last-child td:nth-child(2)');
const oprKey = document.querySelectorAll('tbody td:last-child');
const exeKey = document.querySelector('tbody tr:last-child td:nth-child(3)')


numKeys.forEach(key => {
    key.addEventListener('click', function(){
        display.textContent += key.textContent;
    })
});

oprKey.forEach(key => {
    key.addEventListener('click', function(){
        if(display.textContent.length != 0){
            if(display.classList.length == 0){
                display.classList.add(key.textContent);
                display.textContent += key.textContent;
                console.log(display.classList.toString());
            }
        }
    })
});

exeKey.addEventListener('click', function(){
    let oprList = "-+÷×";
    let expression = display.textContent;
    if(display.classList.length != 0 && !(oprList.includes(expression.charAt(expression.length - 1)))){
        let opr = display.classList.toString();
        let expressionNbrs = expression.split(`${opr}`);
        let result;
    
        switch(opr){
            case "-" :
                result = expressionNbrs[0] - expressionNbrs[1];
                break
            case "+" :
                result = parseFloat(expressionNbrs[0]) + parseFloat(expressionNbrs[1]);
                break
            case "÷" :
                result = expressionNbrs[0] / expressionNbrs[1];
                break
            case "×" :
                result = expressionNbrs[0] * expressionNbrs[1];
                break
        }
    
        display.textContent = result;
        display.classList.remove(opr);
    }
})