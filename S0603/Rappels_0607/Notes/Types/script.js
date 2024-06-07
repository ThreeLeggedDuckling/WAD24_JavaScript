////////     NUMBER     ////////

let varNumb = 5;
varNumb = 5_555;    //
varNumb = 5.6469;
varNumb = 5e6;
varNumb = 0xF;      // hexadecimal  => 15
varNumb = 0b1101;   // binaire      => 1+4+8 = 13
varNumb = 0o71;     // base8        => 1+56 = 57


const input = prompt('Nombre');
console.log(typeof input);
console.log(input + 10);             // input10
console.log(typeof parseInt("11"), parseInt("11"));
console.log(parseInt("12.3"));
console.log(typeof parseFloat("12.3"), parseFloat("12.3"));
console.log(parseInt('F', 16));     // 15


const a = 7, b = 5;
let rslt, autre = Infinity;

rslt = a + b;               // 12
rslt = a - b;               // 2
rslt = a * b;               // 35
rslt = a / b;               // 1.4
rslt = a % b;               // 2
rslt = Math.floor(a / b)    // 1
rslt = a ** b;              // 16_807

rslt += 5;
rslt -= 5;
rslt *= 5;
rslt /= 5;
rslt %= 5;
rslt **= 5;


rslt = 0

console.log(rslt++);        // 0
console.log(++rslt);        // 2
console.log(rslt--);        // 2
console.log(--rslt);        // 0


Number.NaN
Math.PI

Number.MIN_VALUE;
Number.MAX_VALUE;
Number.MIN_SAFE_INTEGER;
Number.MAX_SAFE_INTEGER

Number.NEGATIVE_INFINITY


const aParser1 = 5;
const imparsable = isNaN(aParser1);      // false
const vd1 = parseInt(aParser1);          // 5

const aParser2 = "salut";
const arsable = isNaN(aParser2);        // true
const vd2 = parseInt(aParser2);         // NaN



////////     STRING     ////////

let chaine = "chaîne entre 'double quotes'"
chaine = 'chaîne entre "single quotes"'

console.log(chaine.length);
console.log(chaine.charAt(2));          // 'a'
console.log(chaine.substring(4, 10));   // 'ne en'
console.log(chaine.split(" "));         // ['chaine', 'entre', '"single', 'quotes"']
