// console.log('lesss go');

//Esercizio
// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero
// e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi (quindi multipli di 15) “FizzBuzz”.



for (let i = 0; i < 100; i++){
    let num = i + 1;

    if (num < 3) {
        console.log(num);

    } else {

        let restThree = num % 3;
        let restFive = num % 5;

        if (restThree === 0 && restFive === 0){
            console.log('FizzBuzz');
        } else if (restThree === 0 && restFive !== 0){
            console.log('Fizz');
        } else if (restThree !== 0 && restFive === 0) {
            console.log('Buzz');
        } else {
            console.log(num);
        }

    }

}