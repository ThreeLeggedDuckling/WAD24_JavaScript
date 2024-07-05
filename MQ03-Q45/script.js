/* CHRISTOPHE Mélusine - WAD24

    BONUS :
    - Si le chiffre entré n'est pas compris entre les valeurs limite, il n'est pas pris en compte et l'input change bièvement d'apparence
    - La mise en évidence des valeurs proches varie selon le degré de proximité en pourcentage de la limite supérieure (5%, 10%, 25%)
    - Affichage du temps (en secondes) qu'il a fallut pour trouver le nombre à la fin
    - Possibilité de choisir entre 3 niveaux de difficulté (variation de la valeur limite supérieur et du nombre de tentatives)

*/

// initialisation variables
let number, attempt, gameStartTime, gameEndTime, timer;
let lowerLimit = 1;
let upperLimit = 100;
let tries = 10

// récupération DOM
const game = document.getElementById('game');
const historic = document.querySelector('tbody');
const bottomLim = document.getElementById('bottomLim');
const topLim = document.getElementById('topLim');
const userGuess = document.getElementById('userGuess');
const guessBtn = document.getElementById('guessBtn');

// affichage limites
bottomLim.textContent = lowerLimit;
topLim.textContent = upperLimit;

// event listeners
document.addEventListener('click', (event) => {
    if (event.target === guessBtn) {
        checkEntry();
    }
    else if (event.target.id === 'newGame') {
        console.log('new game');
        resetGame();
    }

    else if (event.target.id === 'easy') {
        console.log('level : 1');
        upperLimit = 10;
        tries = 5;
        resetGame();
    }
    else if (event.target.id === 'medium') {
        console.log('level : 2');
        upperLimit = 100;
        tries = 10;
        resetGame();
    }
    else if (event.target.id === 'hard') {
        console.log('level : 3');
        upperLimit = 250;
        tries = 15;
        resetGame();
    }
})

userGuess.addEventListener('keyup', (event) => {
    if (event.key === "Enter") {
        console.log(number);
        checkEntry();
    }
})


// initialisation partie
gameInit();


// FONCTIONS

// initialisation partie
function gameInit() {
    do {
        number = generateNumber();
    } while (number === undefined || number < lowerLimit)
    gameStartTime = undefined;
    attempt = 1;
    userGuess.value = '';
}

// fonction soumission tentative
function tryGuess(guess) {
    if (gameStartTime === undefined) {
        gameStartTime = new Date;
    }
    let check = checkGuess(guess);
    // console.log('number :>> ', number);
    recordGuess(guess, check);
    displayHint(check);

    userGuess.value = '';
    attempt++;
    if (attempt > tries || guess === number) {
        endGame();
    }
}

// fonction vérification entrée
function checkGuess(guess) {
    if (guess === number) {
        return 'match';
    }

    let lower = true;
    if (guess < number) {
        lower = false;
    }

    let distance = proximity(guess);
    let margin;
    if (distance < upperLimit * 0.05) {
        margin = 5;
    }
    else if (distance < upperLimit * 0.1) {
        margin = 10;
    }
    else if (distance < upperLimit * 0.25) {
        margin = 25;
    }

    let noMatch = [lower, margin];
    console.log(noMatch);
    return noMatch;
}

// calcul distance absolue entrée - nombre
function proximity(guess) {
    return Math.abs(number - guess);
}

// affichage récapitulatif
function recordGuess(guess, check) {
    const line = document.createElement('tr');
    const record = document.createElement('td');
    record.textContent = guess;
    const hint = document.createElement('td');
    if (Array.isArray(check)) {
        if (check[0]) {
            hint.textContent = '↓';
        }
        else {
            hint.textContent = '↑';
        }
        if (check[1] !== undefined) {
            line.className = `margin${check[1]}`;
        }
    }
    else {
        hint.textContent = '👑';
        line.className = 'win';
    }

    historic.append(line);
    line.append(record, hint);
}

// afichage texte sous input
function displayHint(check) {

    let hint = document.getElementById('hint');
    let triesLeft = document.getElementById('triesLeft');
    if (hint === null) {
        hint = document.createElement('p');
        hint.id = 'hint';
        triesLeft = document.createElement('p');
        triesLeft.id = 'triesLeft'
        game.append(hint, triesLeft);
    }

    if (Array.isArray(check)) {
        if (attempt === tries) {
            hint.textContent = `Dommage, le nombre était ${number}`;
        }
        else if (check[0]) {
            hint.textContent = 'Trop haut !';
        }
        else {
            hint.textContent = 'Trop bas !';
        }
        triesLeft.textContent = `Il vous reste ${tries - attempt} essais.`
    }
    else {
        hint.textContent = 'Félicitation ! Vous avez trouvé le nombre !';
        triesLeft.textContent = `Il vous a fallu ${attempt} essais`;
    }
}

// fin de jeu
function endGame() {
    gameEndTime = new Date;
    timer = Math.floor((gameEndTime.getTime() - gameStartTime.getTime()) / 1000);
    console.log('timer :>> ', (gameEndTime.getTime() - gameStartTime.getTime()) / 1000);
    console.log('game end');

    userGuess.disabled = true;
    guessBtn.disabled = true;

    document.getElementById('triesLeft').textContent += `, ce qui vous a pris ${timer} secondes.`

    const newGame = document.createElement('button');
    newGame.id = 'newGame';
    newGame.textContent = 'Rejouer';
    game.append(newGame);
}

// nouvelle partie
function resetGame() {
    gameInit();

    userGuess.disabled = false;
    guessBtn.disabled = false;

    const hint = document.getElementById('hint');
    const triesLeft = document.getElementById('triesLeft');
    const newGame = document.getElementById('newGame');

    if(hint !== null){
        game.removeChild(hint);
    }
    if(triesLeft !== null){
        game.removeChild(triesLeft);
    }
    if (newGame !== null) {
        game.removeChild(newGame);
    }

    while (historic.children.length !== 0) {
        historic.removeChild(historic.children[0]);
    }
}

// génération nombre aléatoire
function generateNumber() {
    return Math.floor(Math.random() * upperLimit);
}

// vérification si entrée valide
function checkEntry() {
    let guess = userGuess.valueAsNumber
    if (guess >= lowerLimit && guess <= upperLimit) {
        tryGuess(guess);
    }
    else {
        console.log('invalid input');
        userGuess.classList.toggle('invalid');
        setTimeout(() => { userGuess.classList.toggle('invalid') }, 800);
    }
}