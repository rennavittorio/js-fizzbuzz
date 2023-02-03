// console.log('lesss go');

//Esercizio
// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero
// e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi (quindi multipli di 15) “FizzBuzz”.

const myDoc = document.querySelector('body');

for (let i = 0; i < 100; i++){
    let num = i + 1;
    let message = num;

    let caseThree = num % 3;
    let caseFive = num % 5;

    if (caseThree === 0 && caseFive === 0){
        message = 'FizzBuzz';
    } else if (caseThree === 0 && caseFive !== 0){
        message = 'Fizz';
    } else if (caseThree !== 0 && caseFive === 0) {
        message = 'Buzz';
    }

    myDoc.innerHTML += '<div>' + message + '</div>'
    // console.log(message);
}