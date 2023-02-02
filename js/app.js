// console.log('lesss go');

//Esercizio
// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero
// e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi (quindi multipli di 15) “FizzBuzz”.



for (let i = 0; i < 100; i++){
    let restThree = (i + 1) % 3;
    let restFive = (i + 1) % 5;

    if (i < 2) {
        console.log(i + 1);
    } else {
        
        if (restThree === 0 && restFive === 0){
            console.log('FizzBuzz');
        } else if (restThree === 0 && restFive !== 0){
            console.log('Fizz');
        } else if (restThree !== 0 && restFive === 0) {
            console.log('Buzz');
        } else {
            console.log(i + 1);
        }

    }
}