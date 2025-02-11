// Consegna:
// Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// Loop for per contare da 1 a 100
for (let i = 1; i <= 100; i++) {

    // If statement per stampare "Fizz" quando il contatore ha un numero moltiplicabile per 3
    if (i % 3 == 0) {
        console.log("Fizz");
    // If statement per stampare "Buzz" quando il contatore ha un numero moltiplicabile per 5
    } else if (i % 5 == 0) {
        console.log("Buzz");
    // Negli altri casi stampo solo il numero
    } else {
        console.log(i);
    }
}