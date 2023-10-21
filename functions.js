const prompt = require('prompt-sync')();

console.log(`
    WELCOME TO TECHTEN LIBRARY
`)

const bookChoice = prompt('Search for book: ')

console.log("Price of book is 150")

const money = prompt("Enter amount to pay for the book: ")

const pay = (bookPrice, amountPaid) => {
    const balance = amountPaid - bookPrice
    return balance
}

const check = pay(150, money)

switch(bookChoice) {
    case "Nigeria Treasure":
        console.log(`
    Nigeria is the country with the 
    largest population in Africa
    Balnce: ${check}
    `)
    break;

    case "Ghana History":
        console.log(
    `HISTORY OF GHANA
Ghana, which was formerly known
as Gold Coast is located in the 
western part of Africa. It has a 
population of about 33 million 
citizens...
    `
)
console.log(`Balnce: ${check}`)
    break;
    
    case "Alice In Wonderland":
        console.log(`
            ALICE IN WONDERLAND
In a whimsical world called Wonderland, Alice, a curious girl, 
followed a white rabbit down a rabbit hole. She tumbled into a land of 
talking animals, eccentric characters and bizarre adventures. 
Alongside the Mad Hatter, Cheshire Cat and the Queen of Hearts, 
Alice's journey unfolded in a fantastical and surreal realm, 
forever changing her perception of reality.

Balnce: ${check}
`)
    break;
    
    default:
        console.log(`
Sorry this book is not
available in the library.
        `)
}




