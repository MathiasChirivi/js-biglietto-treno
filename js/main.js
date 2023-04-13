//Chiedere all'utente quanti kilometri vuole fare
const kilometri = Number(prompt("Quanti Kilometri vuoi fare?"));

//Chiedere all'utente quanti anni ha
const eta = Number(prompt("Quanti anni hai?"));


if (kilometri == NaN) {
    alert(`si prega si inserire nuovamnete i dati corretti`)
}

//Prezzo BIglietto
let prezzo = 0.21; //prezzo di ogni kilometro

let prezzoKm = (kilometri * prezzo).toFixed(2);

let prezzoTotale;

//Stampa sul file HTML i kilometri dall'utente Inserito
let KilometriDaFare = (`I kilometri che vuoi percorrere sono : ${kilometri} km`);
document.getElementById("kilometri").innerText = KilometriDaFare;

//Stampa sul file HTML gli anni dall'utente inserito
let anniUtente = (`Gli anni dall'utente inserito : ${eta} anni`);
document.getElementById("eta").innerText = anniUtente;

//controllo per lo sconto dell'eta'
if (eta < 18) {
    prezzoTotale = (prezzoKm * 0.2).toFixed(2);
    let prezzoTotaleTicket = (`Il prezzo del biglietto è : ${prezzoTotale} €`);
    document.getElementById("prezzoTotale").innerText = prezzoTotaleTicket;
} else if (eta > 65) {
    prezzoTotale = (prezzoKm * 0.4).toFixed(2);
    let prezzoTotaleTicket = (`Il prezzo del biglietto è : ${prezzoTotale} €`);
    document.getElementById("prezzoTotale").innerText = prezzoTotaleTicket;
} else {
    prezzoTotale = prezzoKm;
    let prezzoTotaleTicket = (`Il prezzo del biglietto è : ${prezzoTotale} €`);
    document.getElementById("prezzoTotale").innerText = prezzoTotaleTicket;
}