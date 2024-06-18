const personnes = [
    {
        id: "0001",
        lastname: "Doe",
        firstname: "John",
        age: 23
    },
    {
        id: "0002",
        lastname: "Edo",
        firstname: "Nojh",
        age: 25
    },
    {
        id: "0003",
        lastname: "Ode",
        firstname: "Ojhn",
        age: 16
    }
];

console.log('personnes:', personnes);
console.log(personnes[0].firstname);
for(const personne of personnes) {
    console.log('id', personne.id);
}

console.log(personnes.filter(isMajor));
console.log(personnes.customFilter(personnes, isMajor));

function customFilter(personne, callbackFn){
    const filtered = [];
    for (const personne of personnes){
        if(callbackFn(personne)){
            filtered.push(personne)
        }
    }
}

function isMajor(personne){
    return personne.age > 18;
}