const str = document.querySelector('h3').textContent;

const e1 = document.getElementById('e1');
let s1 = `${str.indexOf('ma')}, ${str.lastIndexOf('ma')}`;
e1.innerHTML += `<p> → ${s1}</p>`;

const e2 = document.getElementById('e2');
let s2 = str.indexOf('p');
e2.innerHTML += `<p> → ${s2}</p>`;

const e3 = document.getElementById('e3');
let s3 = str.charAt(21);
e3.innerHTML += `<p> → ${s3}</p>`;

const e4 = document.getElementById('e4');
let s4 = str.replace('javascript', 'Java');
e4.innerHTML += `<p> → ${s4}</p>`;

const e5 = document.getElementById('e5');
let s5 = str.split(' ');
e5.innerHTML += `<p> → ${s5}</p>`;

const e6 = document.getElementById('e6');
let s6 = [...str].reverse().join('');
s6 = str.split('').reverse().join('');
e6.innerHTML += `<p> → ${s6}</p>`;