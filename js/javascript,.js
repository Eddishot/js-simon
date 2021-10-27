/*Descrizione:
Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/
// 77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
/*
--- allora, faccio commparire un alert in cui subito mi dice il numero Random genaratomi dalla funzione

--- poi al click OK dell'utente parte il timer di 30 secondi in cui ha tempo di memorizzare le cifre

--- 

*/
// 77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777

// identifico le variabili globali

let numbersGenerate = [];

 let numbersGenerateUser = [];

 let  numbersGenerateWin = [];

// creo una funzione per geneare un numero random

const arrayNumbersRandomlyGenerated = generateRandom()

function generateRandom(){

    const numberGenerate = []

    for (let i = 0; i < 5; i++) {
        const numbers = Math.floor(Math.random() * 100);

        numbersGenerate.push(numbers)
        
    }

    return numbersGenerate;



}   


alert("Devi memorizzare questi numeri.Hai 30 secondi " +  arrayNumbersRandomlyGenerated )
console.log(arrayNumbersRandomlyGenerated)

setTimeout(nameFunction, 3000);




function nameFunction(){

    let numbersGenerateUser = [];

    for (let i = 0; i < 5; i++) {
        const promptUser = parseInt(prompt("inserisci numeri che hai memorizzato"))
        numbersGenerateUser.push(promptUser)
    }
    
}
console.log(numbersGenerateUser)


