
// // L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.
// /////////////////////////////////////////////////////
// const num1 = prompt(`inserisci un numero`);
// const num2 = prompt(`inserisci un altro numero`);
// console.log(`il numero maggiore è; ${num1>num2 ? num1 : num2} `);

// // L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.
// /////////////////////////////////////////////////////
// const parola1 = prompt(`inserisci una parola`);
// const parola2 = prompt(`inserisci un' altra parola`);
// console.log(`la parola più corta è: ${parola1.length < parola2.length ? parola1 : parola2}
// la parola più lunga è: ${parola1.length > parola2.length ? parola1 : parola2}`);


// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il fore con il while.
////////////////////////////////////////////////////////////


// const ripetizioni = 5;
// let somma = 0;
// for (let i = 0; i < ripetizioni; i++) {
//   const numeroInserito = Number(prompt(`inserisci un numero`));
//   somma += numeroInserito;
// }
// alert(`la somma dei numeri da te inseriti è: ${somma}`);
// somma = 0;
// let contatore = 0;
// while (contatore < ripetizioni) {
//   const numeroInserito = Number(prompt(`inserisci un numero`));
//   somma += numeroInserito;
//   contatore++;
// }
// alert(`la somma dei numeri da te inseriti è: ${somma}`)


// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
////////////////////////////////////////////////////////////////
// const invitati = ['ciccio','mario','fabio','luigi',];
// const nomeInvitato = prompt('inserisci il tuo nome');
// alert(`${nomeInvitato} ${invitati.includes(nomeInvitato)?'ok puoi entrare':'mi spiace non puoi entrare'}`);
//
//
//

// // Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.
// /////////////////////////////////////////////////////////////////////
//
// const newArray = [];
// let contatore = 0;
// const ripetizioni = 6;
// while (contatore < ripetizioni) {
//   const numeroInserito = prompt('inserisci un numero');
//   if (numeroInserito % 2 == 0) {
//     newArray.push(numeroInserito);
//   }
//   contatore++;
// }
// console.log(newArray);
//


// Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.
//////////////////////////////////////////////////////////////////////////////////
//
// const numeroN = prompt('inserisci un numero');
// for (let i = 0; i < numeroN ; i++) {
//   console.log(Math.pow((i +1), 3));
// }

// Stampa le potenze di 2 fino a 1000.
///////////////////////////////////////////////
// const ripetizioni = 1000;
// const base = 2;
// let contatore = 0;
// while (contatore < ripetizioni) {
//   console.log(Math.pow(base, (contatore + 1)));
//   contatore++;
// }

// Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.
//////////////////////////////////////////////////////////////////////

// const numeroUtente = prompt('inserisci un numero di 4 cifre');
// let somma = 0;
// for (let i = 0; i < numeroUtente.length; i++) {
//   somma += Number(numeroUtente[i]);
// }
// console.log(somma);

// Calcola la somma e la media dei primi 10 numeri.
const quantiNumeri = 10;
let somma = 0;
let media = 0;

for (let i = 0; i < quantiNumeri; i++) {
  somma += (i+1)
}
console.log(`la somma sei primi ${quantiNumeri} numeri è: ${somma}
la media dei primi ${quantiNumeri} è: ${somma/quantiNumeri}`);


// CREA OGGETTO PALLA es6
////////////////////////////////
// // const palla = {
// //   nome : palla,
// //   peso : 10
// // }
//  class palla {
//   constructor(nome, peso) {
//     this.nome = nome;
//     this.peso = peso;
//   }
// }
//
// const palla1 = new palla('palla', 10);
// console.log(palla1);


// MODIFICA PESO PALLA es6
/////////////////////////////////
// const nuovoPeso = Number(prompt('inserisci nuovo peso'));
// palla1.peso = nuovoPeso;
// console.log(palla1);


// // ARRAY BICI es6
// ////////////////////////
//
// const biciclette = [
//   {
//     nome : 'bici1',
//     peso : 22
//   },
//   {
//     nome : 'bici3',
//     peso : 24
//   },
//   {
//     nome : 'bici3',
//     peso : 1
//   },
//   {
//     nome : 'bici4',
//     peso : 20
//   }
// ];
// console.log(biciclette);
// let piuLeggera;
// for (let i = 1; i < biciclette.length; i++) {
//   if(biciclette[i-1].peso < biciclette[i].peso ){
//     piuLeggera = biciclette[(i-1)];
//   }else{
//   piuLeggera = biciclette[(i)];
//   }
// }
// console.log(piuLeggera.nome);

// // OGGETTO TRIANGOLO es6
// ////////////////////////////
//
// const triangolo = {
//   base : 10,
//   altezza : 10
// }
//
// const area = (triangolo.base * triangolo.altezza)/2;
// console.log(area);
// const lato =Math.sqrt(((triangolo.base*triangolo.base)+(triangolo.altezza*triangolo.altezza)));
// console.log(lato);
// const perimetro = triangolo.base + triangolo.altezza + lato;
// console.log(perimetro);

// ARRAY SQUADRE DI CALCIO es6
////////////////////////////////
// let squadre = [
//   {
//     nome : 'juventus',
//     punti : 0,
//     falli : 0
//   },
//   {
//     nome : 'roma',
//     punti : 0,
//     falli : 0
//   },
//   {
//     nome : 'lazio',
//     punti : 0,
//     falli : 0
//   }
// ];

// ATTRIBUIRE PUNTI E FALLI CASUALI es6
//////////////////////////////////////////
// for (let i = 0; i < squadre.length; i++) {
//   squadre[i].punti = Math.floor(Math.random() * (10 - 0 + 1) ) + 0;
//   squadre[i].falli = Math.floor(Math.random() * (10 - 0 + 1) ) + 0;
// }
// console.log(squadre);

// // ZUCCHINE  es6
// /////////////////////////////////
// //
// class zucchina {
//   constructor(lunghezza,peso) {
//     this.lunghezza = lunghezza;
//     this.peso = peso;
//   }
// }
// let zucchine = [];
// let contatoreZucchine = 0;
// const quanteZucchine = 10;
// while (contatoreZucchine < quanteZucchine) {
//   const random1 = Math.floor(Math.random() * (20 - 10 + 1) ) + 10;
//   const random2 = Math.floor(Math.random() * (200 - 100 + 1) ) + 100;
//   const nuovaZucchina = new zucchina(random1, random2);
//   zucchine.push(nuovaZucchina);
//   contatoreZucchine++;
// }
// console.log(zucchine);
//
// let sommaPeso = 0;
// zucchine.forEach((e) => {
//   sommaPeso += e.peso;
// });
// console.log(sommaPeso);

// // FUNZIONE REVERSE arrow function
// ///////////////////////////////
// const reverseString = stringa => {
//   let newStringa = '';
//   let partenza = stringa.length - 1;
//   for (let i = 0; i < stringa.length; i++) {
//     newStringa += stringa[partenza];
//     partenza--;
//   }
//   return newStringa;
// }
// let stringaDaInvertire = 'ciao'
// console.log(reverseString(stringaDaInvertire));


// // ZUCCHINE 2 es6
// /////////////////////////
//
// //
// class zucchina {
//   constructor(lunghezza,peso) {
//     this.lunghezza = lunghezza;
//     this.peso = peso;
//   }
// }
//
// let zucchine = [];
// let contatoreZucchine = 0;
// const quanteZucchine = 10;
// while (contatoreZucchine < quanteZucchine) {
//   const random1 = Math.floor(Math.random() * (20 - 10 + 1) ) + 10;
//   const random2 = Math.floor(Math.random() * (200 - 100 + 1) ) + 100;
//   const nuovaZucchina = new zucchina(random1, random2);
//   zucchine.push(nuovaZucchina);
//   contatoreZucchine++;
// }
// console.log(zucchine);

//
// let zucchineSotto15 = [];
// let zucchineSopra15 = [];
// zucchine.forEach((e) => {
//   if (e.lunghezza < 15) {
//     zucchineSotto15.push(e);
//   }else{
//     zucchineSopra15.push(e);
//   }
// });
// console.log(zucchineSotto15);
// console.log(zucchineSopra15);
//
// let somma1 = 0;
// let somma2 = 0;
//
// zucchineSotto15.forEach((e) =>{
//   somma1 += e.peso;
// });
// zucchineSopra15.forEach((e) =>{
//   somma2 += e.peso;
// });
// console.log(somma1);
// console.log(somma2);


// // FUNZIONE ALTERNATE ARROW FUNCTION
// //////////////////////////////////////
// const alternate = (array1, array2) =>{
//   let newArray = [];
//   let i = 0;
//   array1.forEach((e) =>{
//     newArray.push(e);
//     newArray.push(array2[i]);
//     i++;
//   });
//   return newArray;
// }
// let arrayNumeri = [1,2,3];
// let arrayLettere = ['a','b','c'];
// console.log(alternate(arrayNumeri, arrayLettere));




// // FUNZIONE SELEZIONE PER RANGE DI INDEX ARROW FUNCTION
// //////////////////////////////////////////////

// const rangeIndex = (array1,num1,num2) => {
//
//   let newArray = [];
//   if (num1 < num2 && num2 < array1.length) {
//
//     for (let i = 0; i < array1.length; i++) {
//       if (i >= num1 && i <= num2) {
//         newArray.push(array1[i]);
//       }
//     }
//   }else{
//     console.log(`valori inseriti scorretti`);
//   }
//   return newArray;
// }
// let arrayStart = ['ciao','ciccio','gino','marco','freeman'];
// let start = 1;
// let end = 3;
// console.log(rangeIndex(arrayStart,start,end));
