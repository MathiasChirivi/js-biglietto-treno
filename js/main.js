//Chiedere all'utente quanti kilometri vuole fare
const kilometri = Number(prompt("Quanti Kilometri vuoi fare?"));
console.log(`L'utente deve percorrere ${kilometri}`);

//Chiedere all'utente quanti anni ha
const eta = Number(prompt("Quanti anni hai?"));
console.log(`L'utente dichiara di avere ${eta} anni`);

//Prezzo BIglietto
let prezzo = 0.21; //prezzo di ogni kilometro

let prezzoKm = (kilometri * prezzo).toFixed(2);
console.log(`Il prezzo dell'biglietto è ${prezzoKm}€`)

let prezzoTotale;

//controllo per lo sconto dell'eta'
if (eta < 18) {
    prezzoTotale = (prezzoKm * 0.2).toFixed(2);
    console.log(`Il prezzo dell'biglietto è ${prezzoTotale}€`)
} else if (eta > 65) {
    prezzoTotale = (prezzoKm * 0.4).toFixed(2);
    console.log(`Il prezzo dell'biglietto è ${prezzoTotale}€`)
} else {
    prezzoTotale = prezzoKm;
}