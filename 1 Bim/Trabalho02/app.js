const deuses = [
    { nome: "Anúbis", dominio: "morte", aurea: "sombria", poder: 98 },
    { nome: "Ísis", dominio: "magia", aurea: "neutra", poder: 95 },
    { nome: "Osíris", dominio: "morte", aurea: "neutra", poder: 92 },
    { nome: "Hórus", dominio: "céu", aurea: "radiante", poder: 88 },
    { nome: "Rá", dominio: "sol", aurea: "radiante", poder: 100 }
]

console.log("Deuses originais:");
console.log(deuses);

const deusesIluminados = deuses.filter(deus => deus.aurea == "radiante");

console.log("\nDeuses com aura radiante:");
console.log(deusesIluminados);

var maximoPoder = deuses.reduce((acc, deus)=>acc+deus.poder, 0)

console.log("\nO poder máximo dos Deuses é de: ", maximoPoder);

const deusesEnfraquecidos = deuses.map(deus => ({...deus, poder: deus.poder/3}));
console.log("\nDeuses enfraquecidos:");
console.log(deusesEnfraquecidos);

console.log("\nNomes dos Deuses:");
deuses.forEach(deus => console.log(deus.nome));

deuses.sort((a, b) => a.nome.localeCompare(b.nome));
console.log("\nNomes dos Deuses ordenados alfabeticamente:");
let nomes= deuses.map(deus => deus.nome);

console.log(nomes);